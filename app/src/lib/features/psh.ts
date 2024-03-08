import { createSlice } from "@reduxjs/toolkit";

export const pshSlice = createSlice({
  name: "psh",
  initialState: {
    "Include PSH Feasibility": true,
  },
  reducers: {
    dispatchPshLayers: (state, action) => {
      switch (action.payload.layer) {
        case "Include PSH Feasibility":
          return { ...state, "Include PSH Feasibility": action.payload.bool };
        default:
          throw new Error();
      }
    },
  },
});

export const pshActions = pshSlice.actions;
export default pshSlice.reducer;
