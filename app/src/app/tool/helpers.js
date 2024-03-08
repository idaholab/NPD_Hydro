// This helper function ensures the user can't query the tool with no features considered - it's a void query
export function ValidateLayers(
  communityLayers,
  environmentalLayers,
  gridLayers,
  industryLayers
) {
  return !Object.values(communityLayers).includes(true) &&
    !Object.values(environmentalLayers).includes(true) &&
    !Object.values(gridLayers).includes(true) &&
    !Object.values(industryLayers).includes(true)
    ? false
    : true;
}
