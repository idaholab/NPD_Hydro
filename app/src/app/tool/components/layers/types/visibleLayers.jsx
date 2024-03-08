export const visibleLayers = [
  {
    name: "Hospitals",
    description:
      "This layer displays the locations of hospitals across the CONUS.",
  },
  {
    name: "Public Schools",
    description:
      "This layer displays the locations of public schools across the CONUS.",
  },
  {
    name: "Fossil Fuel Power Plants",
    description:
      "This layer displays the locations of fossil-fuel-based power plants (coal, natural gas, or oil) across the CONUS.",
  },
  {
    name: "Energy Intensive Facilities",
    description:
      "This layer displays the locations of energy-intensive facilities (i.e., manufacturing facilities) across the CONUS.",
  },
  {
    name: "Natural Gas Compressor Stations",
    description:
      "This layer displays the locations of natural gas compressor stations across the CONUS.",
  },
  {
    name: "Social Vulnerability",
    description:
      "This layer displays the social vulnerability index at each county as per CDC 2021 data. A higher number suggests higher social vulnerability.",
  },
  {
    name: "Natural Hazards",
    description:
      "This layer displays the relative risks from natural hazards at each county as per multiple federal agencies. A higher number suggests higher risks.",
  },
  {
    name: "Drought Index",
    description:
      "This layer displays weekly drought data from the National Drought Mitigation Center in partnership with NOAA and USDA.",
  },
  {
    name: "Air Quality",
    description:
      "This layer displays the relative air quality at each county as per EPA EJScreen 2021 data. A higher number suggests worse air quality.",
  },
  {
    name: "Retail Price of Electricity",
    description:
      "This layer displays the retail price of electricity in cents/kWh at each state as per EIA 2020 data.",
  },
  {
    name: "Energy Communities",
    description:
      "This layer displays census tracts that are considered energy communities for the purposes of IRA tax credit bonus eligibility.",
  },
  {
    name: "Disadvantaged Communities Census Tracts",
    description:
      "This layer displays census tracts that are overburdened and underserved according to the Climate and Economic Justice tool. It identifies communities relevant for Justice40 Initiative efforts.",
  },
];

export const visibleDefaults = {
  Hospitals: false,
  "Public Schools": false,
  "Fossil Fuel Power Plants": false,
  "Energy Intensive Facilities": false,
  "Natural Gas Compressor Stations": false,
  "Social Vulnerability": false,
  "Natural Hazards": false,
  "Drought Index": false,
  "Air Quality": false,
  "Retail Price of Electricity": false,
  "Energy Communities": false,
  "Disadvantaged Communities Census Tracts": false,
};

export function visibleReducer(state, action) {
  switch (action.layer) {
    case "Hospitals":
      return { ...state, Hospitals: action.bool };
    case "Public Schools":
      return { ...state, "Public Schools": action.bool };
    case "Fossil Fuel Power Plants":
      return { ...state, "Fossil Fuel Power Plants": action.bool };
    case "Energy Intensive Facilities":
      return { ...state, "Energy Intensive Facilities": action.bool };
    case "Natural Gas Compressor Stations":
      return { ...state, "Natural Gas Compressor Stations": action.bool };
    case "Social Vulnerability":
      return { ...state, "Social Vulnerability": action.bool };
    case "Natural Hazards":
      return { ...state, "Natural Hazards": action.bool };
    case "Drought Index":
      return { ...state, "Drought Index": action.bool };
    case "Air Quality":
      return { ...state, "Air Quality": action.bool };
    case "Retail Price of Electricity":
      return { ...state, "Retail Price of Electricity": action.bool };
    case "Energy Communities":
      return { ...state, "Energy Communities": action.bool };
    case "Disadvantaged Communities Census Tracts":
      return {
        ...state,
        "Disadvantaged Communities Census Tracts": action.bool,
      };
    default:
      throw new Error();
  }
}
