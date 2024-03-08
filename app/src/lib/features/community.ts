import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "community",
  initialState: {
    "Social Vulnerability": true,
    "Overall Air Quality": true,
    "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio": true,
    "Risks from Natural Hazards": true,
    "Proximity to Hospitals": true,
    "Proximity to Public Schools": true,
    "Reg. Policies Promoting Hydroelectricity": true,
    "Fin. Incentives Promoting Hydroelectricity": true,
    "Per Capita Energy Consumption": true,
    "Per Capita Energy Expenditures": true,
  },
  reducers: {
    dispatchCommunityLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Overall Air Quality":
          return { ...state, "Overall Air Quality": action.payload.bool };
        case "Risks from Natural Hazards":
          return {
            ...state,
            "Risks from Natural Hazards": action.payload.bool,
          };
        case "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
          return {
            ...state,
            "Potential Capacity to Surrounding Fossil-Fuel based Capacity Ratio":
              action.payload.bool,
          };
        case "Reg. Policies Promoting Hydroelectricity":
          return {
            ...state,
            "Reg. Policies Promoting Hydroelectricity": action.payload.bool,
          };
        case "Fin. Incentives Promoting Hydroelectricity":
          return {
            ...state,
            "Fin. Incentives Promoting Hydroelectricity": action.payload.bool,
          };
        case "Per Capita Energy Consumption":
          return {
            ...state,
            "Per Capita Energy Consumption": action.payload.bool,
          };
        case "Per Capita Energy Expenditures":
          return {
            ...state,
            "Per Capita Energy Expenditures": action.payload.bool,
          };
        case "Social Vulnerability":
          return { ...state, "Social Vulnerability": action.payload.bool };
        case "Proximity to Public Schools":
          return {
            ...state,
            "Proximity to Public Schools": action.payload.bool,
          };
        case "Proximity to Hospitals":
          return { ...state, "Proximity to Hospitals": action.payload.bool };
        default:
          throw new Error();
      }
    },
  },
});

export const communityActions = communitySlice.actions;
export default communitySlice.reducer;
