export const hydrogenLayers = [
  {
    name: "Potential Capacity",
    description:
      "This feature considers the potential capacity in the score calculation (based on ORNL's NPD Characteristics Inventory 2022 dataset).",
  },
  {
    name: "Regional Capacity Factor",
    description:
      "This feature considers the regional factor (ratio of actual energy output to the max possible energy output) based on 2001-2008 data.",
  },
  {
    name: "Proximity to Energy-Intensive Facilities",
    description:
      "This feature considers the number of energy-intensive facilities (i.e., manufacturing facilities) (within a 50-mile radius around each NPD site) (as per HIFLD 2022 data) in the score calculation.",
  },
  {
    name: "Proximity to NG Compressing Stations",
    description:
      "This feature considers the number of natural gas compressor stations (within a 50-mile radius around each NPD site) (as per HIFLD 2022 data) in the score calculation.",
  },
  {
    name: "Wholesale Price/PPA Rate of Electricity",
    description:
      "This feature considers the wholesale price of electricity/PPA rates in the score calculation (at each wholesale market region as per EIA 2023, Berkeley Lab Electricity Markets & Policy 2021, and Level10 Energy 2022 data). All NPDs in a market region are assigned the same wholesale price. PPA rates are applied to NPDs located outside market regions.",
  },
];

export const hydrogenDefaults = {
  "Potential Capacity": true,
  "Regional Capacity Factor": true,
  "Proximity to Energy-Intensive Facilities": true,
  "Proximity to NG Compressing Stations": true,
  "Wholesale Price/PPA Rate of Electricity": true,
};

export function hydrogenReducer(state, action) {
  switch (action.layer) {
    case "Potential Capacity":
      return { ...state, "Potential Capacity": action.bool };
    case "Regional Capacity Factor":
      return {
        ...state,
        "Regional Capacity Factor": action.bool,
      };
    case "Proximity to Energy-Intensive Facilities":
      return {
        ...state,
        "Proximity to Energy-Intensive Facilities": action.bool,
      };
    case "Proximity to NG Compressing Stations":
      return { ...state, "Proximity to NG Compressing Stations": action.bool };
    case "Wholesale Price/PPA Rate of Electricity":
      return {
        ...state,
        "Wholesale Price/PPA Rate of Electricity": action.bool,
      };
    default:
      throw new Error();
  }
}
