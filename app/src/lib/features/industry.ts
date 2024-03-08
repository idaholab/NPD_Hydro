import { createSlice } from "@reduxjs/toolkit";

export const industrySlice = createSlice({
  name: "industry",
  initialState: {
    "Potential Capacity": true,
    "Regional Capacity Factor": true,
    "Proximity to Substations": true,
    "Proximity to Energy Intensive Facilities": true,
    "Retail Price of Electricity": true,
  },
  reducers: {
    dispatchIndustryLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Potential Capacity":
          return { ...state, "Potential Capacity": action.payload.bool };
        case "Regional Capacity Factor":
          return { ...state, "Regional Capacity Factor": action.payload.bool };
        case "Proximity to Substations":
          return { ...state, "Proximity to Substations": action.payload.bool };
        case "Proximity to Energy Intensive Facilities":
          return {
            ...state,
            "Proximity to Energy Intensive Facilities": action.payload.bool,
          };
        case "Retail Price of Electricity":
          return {
            ...state,
            "Retail Price of Electricity": action.payload.bool,
          };
        default:
          throw new Error();
      }
    },
  },
});

export const industryActions = industrySlice.actions;
export default industrySlice.reducer;
