import { createSlice } from "@reduxjs/toolkit";

export const hydrogenSlice = createSlice({
  name: "hydrogen",
  initialState: {
    "Potential Capacity": true,
    "Regional Capacity Factor": true,
    "Proximity to Energy-Intensive Facilities": true,
    "Proximity to NG Compressing Stations": true,
    "Wholesale Price/PPA Rate of Electricity": true,
  },
  reducers: {
    dispatchHydrogenLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Potential Capacity":
          return { ...state, "Potential Capacity": action.payload.bool };
        case "Regional Capacity Factor":
          return {
            ...state,
            "Regional Capacity Factor": action.payload.bool,
          };
        case "Proximity to Energy-Intensive Facilities":
          return {
            ...state,
            "Proximity to Energy-Intensive Facilities": action.payload.bool,
          };
        case "Proximity to NG Compressing Stations":
          return {
            ...state,
            "Proximity to NG Compressing Stations": action.payload.bool,
          };
        case "Wholesale Price/PPA Rate of Electricity":
          return {
            ...state,
            "Wholesale Price/PPA Rate of Electricity": action.payload.bool,
          };
        default:
          throw new Error();
      }
    },
  },
});

export const hydrogenActions = hydrogenSlice.actions;
export default hydrogenSlice.reducer;
