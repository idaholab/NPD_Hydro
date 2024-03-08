import { createSlice } from "@reduxjs/toolkit";

export const environmentalSlice = createSlice({
  name: "environmental",
  initialState: {
    "Overall Air Quality": true,
    "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio": true,
    "Affected Oceanic and Inland Species": true,
    "Fish Passage Requirements": true,
    "Dam Removal Considerations": true,
  },
  reducers: {
    dispatchEnvironmentalLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Overall Air Quality":
          return { ...state, "Overall Air Quality": action.payload.bool };
        case "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
          return {
            ...state,
            "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
              action.payload.bool,
          };
        case "Affected Oceanic and Inland Species":
          return {
            ...state,
            "Affected Oceanic and Inland Species": action.payload.bool,
          };
        case "Fish Passage Requirements":
          return { ...state, "Fish Passage Requirements": action.payload.bool };
        case "Dam Removal Considerations":
          return {
            ...state,
            "Dam Removal Considerations": action.payload.bool,
          };
        default:
          throw new Error();
      }
    },
  },
});

export const environmentalActions = environmentalSlice.actions;
export default environmentalSlice.reducer;
