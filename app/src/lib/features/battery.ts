import { createSlice } from "@reduxjs/toolkit";

export const batterySlice = createSlice({
  name: "battery",
  initialState: {
    "Potential Capacity": true,
    "Regional Capacity Factor": true,
    "Proximity to Substations": true,
    "Proximity to Energy-Intensive Facilities": true,
    "Proximity to Hospitals": true,
    "Max. Daily Peak Load": true,
    "Wholesale Price/PPA Rate of Electricity": true,
  },
  reducers: {
    dispatchBatteryLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Potential Capacity":
          return { ...state, "Potential Capacity": action.payload.bool };
        case "Regional Capacity Factor":
          return { ...state, "Regional Capacity Factor": action.payload.bool };
        case "Proximity to Substations":
          return {
            ...state,
            "Proximity to Substations": action.payload.bool,
          };
        case "Proximity to Energy-Intensive Facilities":
          return {
            ...state,
            "Proximity to Energy-Intensive Facilities": action.payload.bool,
          };
        case "Proximity to Hospitals":
          return {
            ...state,
            "Proximity to Hospitals": action.payload.bool,
          };
        case "Max. Daily Peak Load":
          return {
            ...state,
            "Max. Daily Peak Load": action.payload.bool,
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

export const batteryActions = batterySlice.actions;
export default batterySlice.reducer;
