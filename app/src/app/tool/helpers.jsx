// Hooks
import { useEffect } from "react";

// Store
import { useAppSelector } from "@/lib/hooks";

// This helper function ensures the user can't query the tool with no features considered - it's a void query
export function validate(
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

export async function query(
  communitySelector,
  environmentalSelector,
  gridSelector,
  industrySelector,
  batterySelector,
  hydrogenSelector,
  visibleSelector,
  weightSelector
) {
  await axios
    .post(
      `api/npd`,
      JSON.stringify({
        layers: {
          visibleLayers: visibleSelector,
          communityLayers: communitySelector,
          environmentalLayers: environmentalSelector,
          gridLayers: gridSelector,
          industryLayers: industrySelector,
          batteryLayers: batterySelector,
          hydrogenLayers: hydrogenSelector,
        },
        weights: weightSelector,
      })
    )
    .then((response) => {
      if (response.data.dams) {
        return { dams: response.data.dams, render: false, submit: false };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
