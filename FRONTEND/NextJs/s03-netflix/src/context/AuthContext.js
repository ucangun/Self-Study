"use client";

import { createContext } from "react";

// auth(yetki) işlemlerini yaptığımız context

export const YetkiContext = createContext();

//* custom hook

export const useAuthContext = () => {
  return useContext(YetkiContext);
};

const AuthContextProvider = ({ children }) => {
  return <YetkiContext.Provider value={{}}>{children}</YetkiContext.Provider>;
};

export default AuthContextProvider;
