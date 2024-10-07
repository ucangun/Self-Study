import { createSlice } from "@reduxjs/toolkit";

export const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    olusturKullanici: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    resetKullanici: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { olusturKullanici, resetKullanici } = yetkiSlice.actions;

export default yetkiSlice.reducer;
