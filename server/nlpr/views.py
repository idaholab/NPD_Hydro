# Models
from .models import CountyTable, NpInventoryMaster

# Decorators
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

# Helpers
from .helpers.query import to_dict
from .helpers.score import score

# Utilities
import json
import os
from django.http import JsonResponse

# Environment
import environ
env = environ.Env()
environ.Env.read_env()

# Cache
cache_path = os.path.join(os.path.dirname(__file__), 'cache')
with open(os.path.join(cache_path, "air_quality.json")) as f:
    air_quality = json.load(f)
with open(os.path.join(cache_path, "compressor_stations.json")) as f:
    compressor_stations = json.load(f)
with open(os.path.join(cache_path, "disadvantaged_communities.json")) as f:
    disadvantaged_communities = json.load(f)
with open(os.path.join(cache_path, "electricity_prices.json")) as f:
    electricity_prices = json.load(f)
with open(os.path.join(cache_path, "energy_communities.json")) as f:
    energy_communities = json.load(f)
with open(os.path.join(cache_path, "energy_intensive_facilities.json")) as f:
    energy_intensive_facilities = json.load(f)
with open(os.path.join(cache_path, "fossil_fuel_powerplants.json")) as f:
    fossil_fuel_powerplants = json.load(f)
with open(os.path.join(cache_path, "hazards.json")) as f:
    hazards = json.load(f)
with open(os.path.join(cache_path, "hospitals.json")) as f:
    hospitals = json.load(f)
with open(os.path.join(cache_path, "msa.json")) as f:
    msa = json.load(f)
with open(os.path.join(cache_path, "public_schools.json")) as f:
    public_schools = json.load(f)
with open(os.path.join(cache_path, "social_vulnerability.json")) as f:
    social_vulnerability = json.load(f)

# Create your views here.


@csrf_exempt
@require_http_methods(["POST"])
def counties(request):
    state = json.loads(request.body).get('state')

    counties = [to_dict(county)
                for county in CountyTable.objects.using('npd').filter(state_name=state.upper()).order_by('county_name')]

    return JsonResponse(counties, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
def np_inventory_master(request):

    # Find out which Visible Layers where requested, if any
    visible_layers = json.loads(request.body).get(
        'layers').get('visibleLayers')

    # Read the selected Weights
    weights = json.loads(request.body).get('weights')

    # These "Layers" are the "Features Considered" from the user interface
    community_layers = json.loads(request.body).get(
        'layers').get('communityLayers')
    environmental_layers = json.loads(request.body).get(
        'layers').get('environmentalLayers')
    grid_layers = json.loads(request.body).get('layers').get('gridLayers')
    industry_layers = json.loads(request.body).get(
        'layers').get('industryLayers')
    battery_layers = json.loads(request.body).get(
        'layers').get('batteryLayers')
    hydrogen_layers = json.loads(request.body).get(
        'layers').get('hydrogenLayers')

    # Instantiate the data structure to build out Visible Layer data
    visible_data = {}

    # For each Visible Layer requested, the switch statement follows the below logic
    # dicts - First query the database for the required fields - this is determined by which fields you want the user to have access to
    # geo - Transform the .geojson attribute of the 'shape' field into json - this turns it into an array of lat/long for the ArcGIS map. For convenience I also round some values as needed.
    # data - Append the Visible Layer to the visible_data data structure
    for layer, bool in visible_layers.items():
        if bool:
            try:
                match layer:
                    case "Hospitals":
                        visible_data = {**visible_data,
                                        "hospitals": hospitals}
                    case "Public Schools":
                        visible_data = {**visible_data,
                                        "public_schools": public_schools}
                    case "Fossil Fuel Power Plants":
                        visible_data = {**visible_data,
                                        "fossil_fuel_powerplants": fossil_fuel_powerplants}
                    case "Energy Intensive Facilities":
                        visible_data = {
                            **visible_data, "energy_intensive_facilities": energy_intensive_facilities}
                    case "Natural Gas Compressor Stations":
                        visible_data = {**visible_data,
                                        "compressor_stations": compressor_stations}
                    case "Social Vulnerability":
                        visible_data = {**visible_data,
                                        "social_vulnerability": social_vulnerability}
                    case "Natural Hazards":
                        visible_data = {
                            **visible_data, "hazards": hazards}
                    case "Drought Index":
                        visible_data = {**visible_data, "droughts": True}
                    case "Air Quality":
                        visible_data = {**visible_data, "aqi": air_quality}
                    case "Retail Price of Electricity":
                        visible_data = {
                            **visible_data, 'electricity_prices': electricity_prices}
                    case "Energy Communities":
                        visible_data = {**visible_data,
                                        'energy_communities': energy_communities, 'msa': msa}
                    case "Disadvantaged Communities Census Tracts":
                        visible_data = {
                            **visible_data, 'disadvantaged_communities': disadvantaged_communities}
            except Exception as e:
                print(e, flush=True)

    # Convert Dam QueryObjects to Dam dictionaries
    dams_dicts = [to_dict(dam)
                  for dam in NpInventoryMaster.objects.using('npd').all()]

    # Score Dams according to their Features Considered and Weights, giving them a 'total_score' field
    # Also computes the Energy Storage and Technology Feasibility scores, giving them 'battery_score' and 'h2_feasibility_score' fields
    dams = score(dams_dicts, community_layers, environmental_layers,
                 grid_layers, industry_layers, battery_layers, hydrogen_layers, weights)
    

    # Sort dams by their 'total_score' and give them a 'rank' field
    sorted_dams = sorted(dams, key=lambda d: d['total_score'], reverse=True)
    for (index, dam) in enumerate(sorted_dams):
        dam["rank"] = index + 1

    # Append the dams to the Visible Data data structure
    visible_data = {**visible_data, "dams": sorted_dams}


    return JsonResponse(visible_data, safe=False)
