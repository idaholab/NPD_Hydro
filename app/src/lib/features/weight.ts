import { createSlice } from "@reduxjs/toolkit";

type weights = {
  weights: {
    [key: string]: number;
  };
  benefit: string | undefined;
};

const initialState: weights = {
  weights: {
    community: 0.5,
    environmental: 0.5,
    grid: 0.5,
    industry: 0.5,
    battery: 0.5,
    hydrogen: 0.5,
    psh: 0.5,
  },
  benefit: undefined,
};

export const weightSlice = createSlice({
  name: "weight",
  initialState: initialState,
  reducers: {
    dispatchWeights: (state, action) => {
      let category = action.payload.category;
      state = {
        ...state,
        weights: {
          ...state.weights,
          [category]: action.payload.weight,
        },
      };
      return state;
    },
    benefit: (state, action) => {
      state.benefit = action.payload;
      return state;
    },
  },
});

export const weightActions = weightSlice.actions;
export default weightSlice.reducer;
