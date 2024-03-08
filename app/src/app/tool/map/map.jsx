// React
import React from "react";

// Hooks
import { useEffect, useMemo, useRef } from "react";
import { useTheme } from "@mui/material/styles";

// ESRI
import { loadModules } from "esri-loader";

// Material
import { Box } from "@mui/system";

// Style
import "./style.css";

// Helpers
import {
  GeoAqiFactory,
  GeoDroughtsFactory,
  GeoDamFactory,
  GeoHazardsFactory,
  GeoElectricityPricesFactory,
  GeoFossilFuelFactory,
  GeoHospitalFactory,
  GeoManufacturingFactory,
  GeoNaturalGasFactory,
  GeoPublicSchoolFactory,
  GeoSocialVulnerabilityFactory,
  GeoWindspeedFactory,
  GeoHorizontalIrradianceFactory,
  GeoSurfaceOwnershipFactory,
  GeoWholesaleMarketsFactory,
  GeoElectricityTerritoriesFactory,
  GeoEnergyCommunitiesFactory,
  GeoDisadvCommunitiesFactory,
  GeoMetropolitanFactory,
} from "./helpers";

// ArcGIS
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";

import axios from "axios";

export default function ArcGIS(props) {
  // GeoLayers
  const geoLayers = useMemo(() => [], []);

  // GeoRefLayers
  const geoRef = useRef([]);

  // Theme
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      // Define functions to retrieve API data
      async function getDrought() {
        await axios
          .get(
            "https://services5.arcgis.com/0OTVzJS4K09zlixn/ArcGIS/rest/services/USDM_current/FeatureServer/0/query",
            {
              params: {
                where: "1=1",
                geometryType: "esriGeometryEnvelope",
                returnGeometry: "true",
                f: "pgeojson",
              },
            }
          )
          .then((response) => {
            geoRef.current = response.data;
          });
      }

      // Get API data
      if (props.data.droughts) {
        await getDrought();
      }

      loadModules([], {
        css: true,
      }).then(() => {
        // Get database data
        if (geoLayers.length === 0) {
          if (props.data.electricity_prices) {
            geoLayers.push(
              GeoElectricityPricesFactory(props.data.electricity_prices)
            );
          }
          if (props.data.droughts) {
            geoLayers.push(GeoDroughtsFactory(geoRef.current));
          }
          if (props.data.aqi) {
            geoLayers.push(GeoAqiFactory(props.data.aqi));
          }
          if (props.data.hazards) {
            geoLayers.push(GeoHazardsFactory(props.data.hazards));
          }
          if (props.data.social_vulnerability) {
            geoLayers.push(
              GeoSocialVulnerabilityFactory(props.data.social_vulnerability)
            );
          }
          if (props.data.compressor_stations) {
            geoLayers.push(
              GeoNaturalGasFactory(props.data.compressor_stations)
            );
          }
          if (props.data.manufacturing_facilities) {
            geoLayers.push(
              GeoManufacturingFactory(props.data.manufacturing_facilities)
            );
          }
          if (props.data.powerplants) {
            geoLayers.push(GeoFossilFuelFactory(props.data.powerplants));
          }
          if (props.data.schools) {
            geoLayers.push(GeoPublicSchoolFactory(props.data.schools));
          }
          if (props.data.hospitals) {
            geoLayers.push(GeoHospitalFactory(props.data.hospitals));
          }
          if (props.data.windspeed) {
            geoLayers.push(GeoWindspeedFactory(props.data.windspeed));
          }
          if (props.data.irradiance) {
            geoLayers.push(
              GeoHorizontalIrradianceFactory(props.data.irradiance)
            );
          }
          if (props.data.surface_ownership) {
            geoLayers.push(
              GeoSurfaceOwnershipFactory(props.data.surface_ownership)
            );
          }
          if (props.data.wholesale_markets) {
            geoLayers.push(
              GeoWholesaleMarketsFactory(props.data.wholesale_markets)
            );
          }
          if (props.data.electricity_territories) {
            geoLayers.push(
              GeoElectricityTerritoriesFactory(
                props.data.electricity_territories
              )
            );
          }
          if (props.data.energy_communities && props.data.msa) {
            geoLayers.push(GeoMetropolitanFactory(props.data.msa));
            geoLayers.push(
              GeoEnergyCommunitiesFactory(props.data.energy_communities)
            );
          }
          if (props.data.disadvantaged_communities) {
            geoLayers.push(
              GeoDisadvCommunitiesFactory(props.data.disadvantaged_communities)
            );
          }
          if (props.data.dams) {
            geoLayers.push(GeoDamFactory(props.data.dams));
          }
        }

        const map = new Map({
          basemap:
            theme.palette.mode === "dark" ? "dark-gray-vector" : "topo-vector",
          layers: geoLayers,
        });

        const view = new MapView({
          container: "map",
          map: map,
          center: [-98, 41],
          zoom: theme.palette.mode === "dark" ? 3 : 4,
        });

        view.ui.remove("attribution");
        view.popup.autoCloseEnabled = true;

        const legend = new Expand({
          content: new Legend({
            view: view,
            style: "card",
            container: document.createElement("div"),
          }),
          view: view,
          mode: "floating",
          expanded: true,
        });

        // The legend awkwardly renders nothing for a brief moment prior to the DOM paint. Hide it for 3500 milliseconds
        setTimeout(() => {
          view.ui.add(legend, "bottom-right");
        }, 3500);
      });
    })();

    return;
  }, [props.data, geoLayers, theme]);

  return (
    <Box>
      {theme.palette.mode === "light" ? (
        <Box
          id="map"
          sx={{
            height: "calc(100vh / 1.75)",
            width: "calc(100vw / 1.5)",
          }}
        ></Box>
      ) : (
        <Box
          id="map"
          className="dark"
          sx={{
            height: "calc(100vh / 1.75)",
            width: "calc(100vw / 1.5)",
          }}
        ></Box>
      )}
    </Box>
  );
}
