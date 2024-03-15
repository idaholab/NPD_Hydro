import json


def score(dams_dicts, community_layers, environmental_layers, grid_layers, industry_layers, battery_layers, hydrogen_layers, weights):
    """
    This helper function takes as input a list of dam dictionaries, and scores them.

    The scores are computed as follows:

    COMMUNITY_SCORE = SOC_VUL + SUM_AQI_STD + CAP_FSSL_RATIO_STD + HAZ_TOTAL_STD + HSPT_CT_50MI_STD + SCHL_CT_50MI_STD + HYD_REG_CT_STD + HYD_FIN_CT_STD + CAP_CONSUMP_STD + CAP_EXPENSE_STD  
    ENVIRONMENTAL_SCORE = SUM_AQI_STD + CAP_FSSL_RATIO_STD + (1-SPECIES_CT_STD) + FSH_PSSG_PCT_STD + COMP_SCORE_STD
    GRID_SCORE = CAP_MW_STD + CAP_FCTR_STD + (1 - DIST_SUBST_STD) + MFG_CT_50MI_STD + CAP_CONSUMP_STD + MAX_HOUR_LOAD_STD + WHOLESALE_PRC_STD + FSH_PSSG_PCT_STD
    INDUSTRY_SCORE = CAP_MW_STD + CAP_FCTR_STD + (1 - DIST_SUBST_STD) + MFG_CT_50MI_STD + ELEC_PRC_STD
    H2_FEASIBILITY = CAP_MW_STD + CAP_FCTR_STD + NG_CT_50MI_STD + MFG_CT_50MI_STD + (1 - WHOLESALE _PRC_STD)
    BATTERY_FEASIBILITY = CAP_MW_STD + CAP_FCTR_STD + (1 - DIST_SUBST_STD) + MFG_CT_50MI_STD + HSPT_CT_50MI_STD + MAX_HOUR_LOAD_STD + WHOLESALE_PRC_STD
    PSH_FEASIBILITY = Already calculated, this comes from the database

    The scores are then normalized according to the formula:

    x_normalized = x - min(x) / max(x) - min(x)

    Where x represents a dam's community, environment, grid, or industry score, and min(x)/max(x) represents the respective minimum and maximum of each score in the entire list of dams.

    The normalized scores are then multiplied by their respective weights, and added together:

    TOTAL_SCORE = WT_COMMUNITY * Normalized COMMUNITY_SCORE + WT_ENVIRONMENT * Normalized ENVIRONMENT_SCORE + WT_GRID * Normalized GRID_SCORE +  WT_INDUSTRY * Normalized INDUSTRY_SCORE 

    The updated and scored list of dam dictionaries is returned

    """

    # The dams list is built with a dictionary comprehension, expanding each dictionary, and adding/updating key/value pairs as needed to compute the scores for that dam
    # Whether or not a feature is considered is determined by whether that feature has been selected in each respective community, environmental, grid, and industry dictionary

    # Compute the scores

    dams = [
        {**dam,
            'comm_score': round(
                (dam.get('soc_vul', 0) if community_layers.get('Social Vulnerability') else 0) +
                (dam.get('sum_aqi_std', 0) if community_layers.get('Overall Air Quality') else 0) +
                (dam.get('cap_fssl_ratio_std', 0) if community_layers.get('Potential Capacity to Surrounding Fossil-Fuel-based Capacity Ratio') else 0) +
                (dam.get('haz_total_std', 0) if community_layers.get('Risks from Natural Hazards') else 0) +
                (dam.get('hspt_ct_50mi_std', 0) if community_layers.get('Proximity to Hospitals') else 0) +
                (dam.get('schl_ct_50mi_std', 0) if community_layers.get('Proximity to Public Schools') else 0) +
                (dam.get('hyd_reg_ct_std', 0) if community_layers.get('Reg. Policies Promoting Hydroelectricity') else 0) +
                (dam.get('hyd_fin_ct_std', 0) if community_layers.get('Fin. Incentives Promoting Hydroelectricity') else 0) +
                (dam.get('cap_consump_std', 0) if community_layers.get('Per Capita Energy Consumption') else 0) +
                (dam.get('cap_expense_std', 0) if community_layers.get('Per Capita Energy Expenditures') else 0), 2),
            'env_score': round(
                (dam.get('sum_aqi_std', 0) if environmental_layers.get('Overall Air Quality') else 0) +
                (dam.get('cap_fssl_ratio_std', 0) if environmental_layers.get('Potential Capacity to Surrounding Fossil-Fuel-based Capacity Ratio') else 0) +
                ((1 - dam.get('species_ct_std', 0)) if environmental_layers.get('Affected Oceanic and Inland Species') else 0) +
                (dam.get('fsh_pssg_pct_std', 0) if environmental_layers.get('Fish Passage Requirements') else 0) +
                (dam.get('comp_score_std', 0) if environmental_layers.get('Dam Removal Considerations') else 0), 2),
            'grid_score': round(
                (dam.get('cap_mw_std', 0) if grid_layers.get('Potential Capacity') else 0) +
                (dam.get('cap_fctr_std', 0) if grid_layers.get('Regional Capacity Factor') else 0) +
                (1 - dam.get('dist_subst_std', 0) if grid_layers.get('Proximity to Substation') else 0) +
                (dam.get('mfg_ct_50mi_std', 0) if grid_layers.get('Proximity to Energy Intensive Facilities') else 0) +
                (dam.get('cap_consump_std', 0) if grid_layers.get('Per Capita Energy Consumption') else 0) +
                (dam.get('max_hour_load_std', 0) if grid_layers.get('Max. Daily Peak Load') else 0) +
                (dam.get('wholesale_prc_std', 0) if grid_layers.get('Wholesale Price/PPA Rate of Electricity') else 0) +
                (dam.get('fsh_pssg_pct_std', 0) if grid_layers.get('Fish Passage Requirements') else 0), 2),
            'industry_score': round(
                (dam.get('cap_mw_std', 0) if industry_layers.get('Potential Capacity') else 0) +
                (dam.get('cap_fctr_std', 0) if industry_layers.get('Regional Capacity Factor') else 0) +
                ((1 - dam.get('dist_subst_std', 0)) if industry_layers.get('Proximity to Substation') else 0) +
                (dam.get('mfg_ct_50mi_std', 0) if industry_layers.get('Proximity to Energy Intensive Facilities') else 0) +
                (dam.get('elec_prc_std', 0) if industry_layers.get('Retail Price of Electricity') else 0), 2),
            'batteries_score': round(
                (dam.get('cap_mw_std', 0) if battery_layers.get('Potential Capacity') else 0) +
                (dam.get('cap_fctr_std', 0) if battery_layers.get('Regional Capacity Factor') else 0) +
                ((1 - dam.get('dist_subst_std', 0)) if battery_layers.get('Proximity to Substations') else 0) +
                (dam.get('mfg_ct_50mi_std', 0) if battery_layers.get('Proximity to Energy Intensive Facilities') else 0) +
                (dam.get('hspt_ct_50mi_std', 0) if battery_layers.get('Proximity to Hospitals') else 0) +
                (dam.get('max_hour_load_std', 0) if battery_layers.get('Max. Daily Peak Load') else 0) +
                (dam.get('wholesale_prc_std', 0) if battery_layers.get('Wholesale Price/PPA Rate of Electricity') else 0), 2),
            'h2_feasibility_score': round(
                (dam.get('cap_mw_std', 0) if hydrogen_layers.get('Potential Capacity') else 0) +
                (dam.get('cap_fctr_std', 0) if hydrogen_layers.get('Regional Capacity Factor') else 0) +
                (dam.get('mfg_ct_50mi_std', 0) if hydrogen_layers.get('Proximity to Energy Intensive Facilities') else 0) +
                (dam.get('ng_ct_50mi_std', 0) if hydrogen_layers.get('Proximity to NG Compressing Stations') else 0) +
                ((1 - dam.get('wholesale_prc_std', 0)) if hydrogen_layers.get('Wholesale Price/PPA Rate of Electricity') else 0), 2)
         } for dam in dams_dicts
    ]

    # Normalize and weigh the scores
    # If a user deselects all features for a given category, the delta is 0, because the min and max are 0

    community_max = max(
        dams, key=lambda x: x['comm_score']).get("comm_score")
    community_min = min(
        dams, key=lambda x: x['comm_score']).get("comm_score")
    community_delta = community_max - community_min

    environment_max = max(
        dams, key=lambda x: x['env_score']).get("env_score")
    environment_min = min(
        dams, key=lambda x: x['env_score']).get("env_score")
    environment_delta = environment_max - environment_min

    grid_max = max(dams, key=lambda x: x['grid_score']).get("grid_score")
    grid_min = min(dams, key=lambda x: x['grid_score']).get("grid_score")
    grid_delta = grid_max - grid_min

    industry_max = max(dams, key=lambda x: x['industry_score']).get(
        "industry_score")
    industry_min = min(dams, key=lambda x: x['industry_score']).get(
        "industry_score")
    industry_delta = industry_max - industry_min

    batteries_max = max(dams, key=lambda x: x['batteries_score']).get(
        "batteries_score")
    batteries_min = min(dams, key=lambda x: x['batteries_score']).get(
        "batteries_score")
    batteries_delta = batteries_max - batteries_min

    h2_max = max(dams, key=lambda x: x['h2_feasibility_score']).get(
        "h2_feasibility_score")
    h2_min = min(dams, key=lambda x: x['h2_feasibility_score']).get(
        "h2_feasibility_score")
    h2_delta = h2_max - h2_min

    # Compute the total scores
    # WEIGHT * (SCORE - MIN_SCORE) / (MAX_SCORE - MIN_SCORE)
    dams = [
        {**dam,
         'comm_score': round(weights.get('community') * ((dam.get('comm_score') - community_min) / (community_delta if community_delta != 0 else 1)), 2),
         'env_score': round(weights.get('environmental') * ((dam.get('env_score') - environment_min) / (environment_delta if environment_delta != 0 else 1)), 2),
         'grid_score': round(weights.get('grid') * ((dam.get('grid_score') - grid_min) / (grid_delta if grid_delta != 0 else 1)), 2),
         'industry_score': round(weights.get('industry') * ((dam.get('industry_score') - industry_min) / (industry_delta if industry_delta != 0 else 1)), 2),
         'h2_feasibility_score': round(weights.get('hydrogen') * ((dam.get('h2_feasibility_score') - h2_min) / (h2_delta if h2_delta != 0 else 1)), 2),
         'batteries_score': round(weights.get('battery') * ((dam.get('batteries_score') - batteries_min) / (batteries_delta if batteries_delta != 0 else 1)), 2),
         } for dam in dams
    ]

    # Edit/format any data for presentation
    dams = [
        {**dam,
         'cap_mw': round(dam.get('cap_mw'), 2),  # Round the MW to 2 decimals
         # Round the miles to 2 decimals
         'dist_subst': round(dam.get('dist_subst'), 2),
         # Control logic translates numeric to qualitative score
         'batteries_score': 'LOW' if (dam.get('batteries_score') < 0.33) else ('MEDIUM' if (dam.get('batteries_score') < 0.66) else "HIGH"),
         # Control logic translates numeric to qualitative score
         'h2_feasibility_score': 'LOW' if (dam.get('h2_feasibility_score') < 0.33) else ('MEDIUM' if (dam.get('h2_feasibility_score') < 0.66) else "HIGH"),
         # Round the price to 2 decimals
         'elec_prc': round(dam.get('elec_prc'), 2),
         'wholesale_prc_std': round(dam.get('wholesale_prc_std'), 2),
         } for dam in dams
    ]

    # The 'shape' field comes from PostGIS as a Shape object, and so it has to be transformed and loaded into json
    dams = [
        {**dam,
         'shape': json.loads(dam.get('shape').geojson)
         } for dam in dams
    ]

    # Add the denominator and compute the total score
    # The total score is some fraction of the considered scores, so long as they are not 0
    denominator = weights.get('community') + weights.get('environmental') + weights.get('grid') + weights.get('industry')
    
    dams = [{**dam,
             'total_score':
                 str(round(dam.get('comm_score') +
                           dam.get('grid_score') +
                           dam.get('env_score') +
                           dam.get('industry_score'), 2)) + f"/{denominator}"} for dam in dams]
    

    return dams
