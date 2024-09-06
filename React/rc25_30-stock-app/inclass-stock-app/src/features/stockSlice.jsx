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
    // firmSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload.data;
    // },
    // brandSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload.data;
    // },
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.endpoint] = payload.stock;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getStockSuccess } = stockSlice.actions;
export default stockSlice.reducer;
