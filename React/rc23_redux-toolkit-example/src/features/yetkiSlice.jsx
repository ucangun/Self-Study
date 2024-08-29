import { createSlice } from "@reduxjs/toolkit";

export const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    olusturKullanici: () => {},
  },
});

export const { olusturKullanici } = yetkiSlice.actions;

export default yetkiSlice.reducer;
