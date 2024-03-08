export const communityLayers = [
  {
    name: "Social Vulnerability",
    description:
      "This feature considers the social vulnerability index in the score calculation (at each county as per CDC 2021 data). All NPDs in a county are assigned the same social vulnerability index.",
  },
  {
    name: "Overall Air Quality",
    description:
      "This feature considers the overall air quality based on diesel particulate matter, air toxics cancer risk, air toxic respiratory hazard index, traffic proximity, ozone, and particulate matter 2.5 (at each county as per EPA EJScreen 2021 data). All NPDs in a county are assigned the same overall air quality.",
  },
  {
    name: "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio",
    description:
      "This feature considers the ratio between the potential generation capacity of the dam and the total operating capacity of nearby fossil-fuel-based power plants (coal, natural gas, or oil) (within a 50-mile radius around each NPD site) in the score calculation.",
  },
  {
    name: "Risks from Natural Hazards",
    description:
      "This feature considers the overall risks from earthquake, flood, hurricane, tornado, volcano, wildfire, and winter weather in the score calculation (at each county as per the University of Minnesota Hazard Data). All NPDs in a county are assigned the same overall risks.",
  },
  {
    name: "Proximity to Hospitals",
    description:
      "This feature considers the number of hospitals (within a 50-mile radius around each NPD site) (as per HIFLD 2022 data) in the score calculation.",
  },
  {
    name: "Proximity to Public Schools",
    description:
      "This feature considers the number of public schools (within a 50-mile radius around each NPD site) (as per HIFLD 2022 data) in the score calculation.",
  },
  {
    name: "Reg. Policies Promoting Hydroelectricity",
    description:
      "This feature considers the number of regulatory policies promoting hydropower technologies in the score calculation (at each state as per DSIRE 2022 data). All NPDs in a state are assigned the same number of regulatory policies.",
  },
  {
    name: "Fin. Incentives Promoting Hydroelectricity",
    description:
      "This feature considers the number of financial incentives promoting hydropower technologies in the score calculation (at each state as per DSIRE 2022 data). All NPDs in a state are assigned the same number of financial incentives.",
  },
  {
    name: "Per Capita Energy Consumption",
    description:
      "This feature considers the per capita energy consumption in the score calculation (at each state as per EIA 2020 data). All NPDs in a state are assigned the same per capita energy consumption.",
  },
  {
    name: "Per Capita Energy Expenditures",
    description:
      "This feature considers the per capita energy expenditures in the score calculation (at each state as per EIA 2020 data). All NPDs in a state are assigned the same per capita energy expenditures.",
  },
];

export const communityDefaults = {
  "Social Vulnerability": true,
  "Overall Air Quality": true,
  "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio": true,
  "Risks from Natural Hazards": true,
  "Proximity to Hospitals": true,
  "Proximity to Public Schools": true,
  "Reg. Policies Promoting Hydroelectricity": true,
  "Fin. Incentives Promoting Hydroelectricity": true,
  "Per Capita Energy Consumption": true,
  "Per Capita Energy Expenditures": true,
};

export function communityReducer(state, action) {
  switch (action.layer) {
    case "Overall Air Quality":
      return { ...state, "Overall Air Quality": action.bool };
    case "Risks from Natural Hazards":
      return { ...state, "Risks from Natural Hazards": action.bool };
    case "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
      return {
        ...state,
        "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
          action.bool,
      };
    case "Reg. Policies Promoting Hydroelectricity":
      return {
        ...state,
        "Reg. Policies Promoting Hydroelectricity": action.bool,
      };
    case "Fin. Incentives Promoting Hydroelectricity":
      return {
        ...state,
        "Fin. Incentives Promoting Hydroelectricity": action.bool,
      };
    case "Per Capita Energy Consumption":
      return { ...state, "Per Capita Energy Consumption": action.bool };
    case "Per Capita Energy Expenditures":
      return { ...state, "Per Capita Energy Expenditures": action.bool };
    case "Social Vulnerability":
      return { ...state, "Social Vulnerability": action.bool };
    case "Proximity to Public Schools":
      return { ...state, "Proximity to Public Schools": action.bool };
    case "Proximity to Hospitals":
      return { ...state, "Proximity to Hospitals": action.bool };
    default:
      throw new Error();
  }
}
