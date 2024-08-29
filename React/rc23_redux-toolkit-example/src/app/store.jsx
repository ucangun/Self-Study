import { configureStore } from "@reduxjs/toolkit";
import yetkiSLice from ".,/features/yetkiSlice";
import haberSlice from ".,/features/haberSlice";

export const store = configureStore({
  reducer: {
    yetkiSlice: yetkiSLice,
    haberSlice: haberSlice,
  },
});
