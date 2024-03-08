import { configureStore } from "@reduxjs/toolkit";

import community from "./features/community";
import environmental from "./features/environmental";
import grid from "./features/grid";
import industry from "./features/industry";
import battery from "./features/battery";
import hydrogen from "./features/hydrogen";
import psh from "./features/psh";
import visible from "./features/visible";
import weight from "./features/weight";

export const makeStore = () => {
  return configureStore({
    reducer: {
      community,
      environmental,
      grid,
      industry,
      battery,
      hydrogen,
      psh,
      visible,
      weight,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
