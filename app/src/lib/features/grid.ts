import { createSlice } from "@reduxjs/toolkit";

export const gridSlice = createSlice({
  name: "grid",
  initialState: {
    "Potential Capacity": true,
    "Regional Capacity Factor": true,
    "Proximity to Substations": true,
    "Proximity to Energy-Intensive Facilities": true,
    "Per Capita Energy Consumption": true,
    "Max. Daily Peak Load": true,
    "Wholesale Price/PPA Rate of Electricity": true,
    "Fish Passage Requirements": true,
  },
  reducers: {
    dispatchGridLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Potential Capacity":
          return { ...state, "Potential Capacity": action.payload.bool };
        case "Regional Capacity Factor":
          return { ...state, "Regional Capacity Factor": action.payload.bool };
        case "Proximity to Substations":
          return { ...state, "Proximity to Substations": action.payload.bool };
        case "Proximity to Energy-Intensive Facilities":
          return {
            ...state,
            "Proximity to Energy-Intensive Facilities": action.payload.bool,
          };
        case "Per Capita Energy Consumption":
          return {
            ...state,
            "Per Capita Energy Consumption": action.payload.bool,
          };
        case "Max. Daily Peak Load":
          return { ...state, "Max. Daily Peak Load": action.payload.bool };
        case "Wholesale Price/PPA Rate of Electricity":
          return {
            ...state,
            "Wholesale Price/PPA Rate of Electricity": action.payload.bool,
          };
        case "Fish Passage Requirements":
          return {
            ...state,
            "Fish Passage Requirements": action.payload.bool,
          };
        default:
          throw new Error();
      }
    },
  },
});

export const gridActions = gridSlice.actions;
export default gridSlice.reducer;
