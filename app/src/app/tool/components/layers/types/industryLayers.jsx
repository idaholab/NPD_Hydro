export const industryLayers = [
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
    name: "Proximity to Substations",
    description:
      "This feature considers the distance from the NPD to the existing substation in the score calculation (based on ORNL's NPD Characteristics Inventory 2022 dataset).",
  },
  {
    name: "Proximity to Energy Intensive Facilities",
    description:
      "This feature considers the number of energy-intensive facilities (i.e., manufacturing facilities) (within a 50-mile radius around each NPD site) (as per HIFLD 2022 data) in the score calculation.",
  },
  {
    name: "Retail Price of Electricity",
    description:
      "This feature considers the retail price of electricity in the score calculation (at each state as per EIA 2020 data). All NPDs in a state are assigned the same retail price.",
  },
];

export const industryDefaults = {
  "Potential Capacity": true,
  "Regional Capacity Factor": true,
  "Proximity to Substations": true,
  "Proximity to Energy Intensive Facilities": true,
  "Retail Price of Electricity": true,
};

export function industryReducer(state, action) {
  switch (action.layer) {
    case "Potential Capacity":
      return { ...state, "Potential Capacity": action.bool };
    case "Regional Capacity Factor":
      return { ...state, "Regional Capacity Factor": action.bool };
    case "Proximity to Substations":
      return { ...state, "Proximity to Substations": action.bool };
    case "Proximity to Energy Intensive Facilities":
      return {
        ...state,
        "Proximity to Energy Intensive Facilities": action.bool,
      };
    case "Retail Price of Electricity":
      return { ...state, "Retail Price of Electricity": action.bool };
    default:
      throw new Error();
  }
}
