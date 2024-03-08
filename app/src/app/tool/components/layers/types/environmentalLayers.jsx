export const environmentalLayers = [
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
    name: "Affected Oceanic and Inland Species",
    description:
      "This feature considers the number of oceanic and inland aquatic species in the score calculation (within the HUC-08 watershed boundary accompanying each NPD site).",
  },
  {
    name: "Fish Passage Requirements",
    description:
      "This feature considers the likelihood of fish passage mitigation requirements in the score calculation (based on the percent of mitigation sites within the HUC-08 watershed boundary accompanying each NPD site that had Tier-1 fish passage mitigation requirement in the ORNL's Environmental Mitigation Database).",
  },
  {
    name: "Dam Removal Considerations",
    description:
      "This feature considers the dam removal consideration in the score calculation (based on downstream hazard potential, age, connectivity, and degree of regulation as per National Anthropogenic Barrier Dataset 2021).",
  },
];

export const environmentalDefaults = {
  "Overall Air Quality": true,
  "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio": true,
  "Affected Oceanic and Inland Species": true,
  "Fish Passage Requirements": true,
  "Dam Removal Considerations": true,
};

export function environmentalReducer(state, action) {
  switch (action.layer) {
    case "Overall Air Quality":
      return { ...state, "Overall Air Quality": action.bool };
    case "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
      return {
        ...state,
        "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
          action.bool,
      };
    case "Affected Oceanic and Inland Species":
      return { ...state, "Affected Oceanic and Inland Species": action.bool };
    case "Fish Passage Requirements":
      return { ...state, "Fish Passage Requirements": action.bool };
    case "Dam Removal Considerations":
      return { ...state, "Dam Removal Considerations": action.bool };
    default:
      throw new Error();
  }
}
