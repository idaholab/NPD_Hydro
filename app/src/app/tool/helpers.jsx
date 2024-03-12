// File Saver
import { saveAs } from "file-saver";

// Axios
import axios from "axios";

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
  visibleSelector,
  batterySelector,
  hydrogenSelector,
  weightSelector
) {
  let response = await axios
    .post(
      `api/npd`,
      {
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
      }
      // {
      //   responseType: "blob",
      // }
    )
    .then((response) => {
      console.log(response.data);
      // saveAs(response.data, "manufacturing_facilities.json");
      if (response.data.dams) {
        return {
          metadata: response.data,
          dams: response.data.dams,
          render: false,
          submit: false,
        };
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}
