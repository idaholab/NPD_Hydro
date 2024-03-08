import { createSlice } from "@reduxjs/toolkit";

export const visibleSlice = createSlice({
  name: "visible",
  initialState: {
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
  },
  reducers: {
    dispatchVisibleLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Hospitals":
          return { ...state, Hospitals: action.payload.bool };
        case "Public Schools":
          return { ...state, "Public Schools": action.payload.bool };
        case "Fossil Fuel Power Plants":
          return { ...state, "Fossil Fuel Power Plants": action.payload.bool };
        case "Energy Intensive Facilities":
          return {
            ...state,
            "Energy Intensive Facilities": action.payload.bool,
          };
        case "Natural Gas Compressor Stations":
          return {
            ...state,
            "Natural Gas Compressor Stations": action.payload.bool,
          };
        case "Social Vulnerability":
          return { ...state, "Social Vulnerability": action.payload.bool };
        case "Natural Hazards":
          return { ...state, "Natural Hazards": action.payload.bool };
        case "Drought Index":
          return { ...state, "Drought Index": action.payload.bool };
        case "Air Quality":
          return { ...state, "Air Quality": action.payload.bool };
        case "Retail Price of Electricity":
          return {
            ...state,
            "Retail Price of Electricity": action.payload.bool,
          };
        case "Energy Communities":
          return { ...state, "Energy Communities": action.payload.bool };
        case "Disadvantaged Communities Census Tracts":
          return {
            ...state,
            "Disadvantaged Communities Census Tracts": action.payload.bool,
          };
        default:
          throw new Error();
      }
    },
  },
});

export const visibleActions = visibleSlice.actions;
export default visibleSlice.reducer;
