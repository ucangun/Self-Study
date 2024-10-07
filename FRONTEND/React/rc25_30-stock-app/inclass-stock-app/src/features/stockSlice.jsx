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
  }, //* endpoint değerlerimizi kullanarak statelerimizi isimlendirdik
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    //   firmSuccess: (state,{payload}) => {
    //      state.loading = false;
    //      state.firms = payload.data;
    //   },
    //   brandSuccess: (state,{payload}) => {
    //     state.loading = false;
    //     state.brands = payload.data;
    //  },
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.endpoint] = payload.stock;
      //* square bracket notation kullanarak gelen değere göre dinamik olarak statelerimiz güncelleyebildik.
      // state["brands"] = payload.stock
      // state["firms"] = payload.stock
    },
    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload[1];
      state.products = payload[0];
      state.brands = payload[2];
    },
    getProPurcFirBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.purchases = payload[1].data;
      state.firms = payload[2].data;
      state.products = payload[0].data;
      state.brands = payload[3].data;
    },
    getProSalBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0].data;
      state.brands = payload[1].data;
      state.sales = payload[2].data;
    },
    getPurSalesSuccess: (state, { payload }) => {
      state.loading = false;
      state.purchases = payload[0].data;
      state.sales = payload[1].data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  // firmSuccess,
  // brandSuccess,
  getStockSuccess,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  getPurSalesSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
