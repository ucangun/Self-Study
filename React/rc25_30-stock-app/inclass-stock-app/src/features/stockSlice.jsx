import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands: [],
    products: [],
    sales: [],
    purchases: [],
    categories: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    firmSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload.data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, firmSuccess, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
