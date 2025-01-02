"use client";

import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";

// auth(yetki) işlemlerini yaptığımız context

export const YetkiContext = createContext();

//* custom hook

export const useAuthContext = () => {
  return useContext(YetkiContext);
};

const AuthContextProvider = ({ children }) => {
  // register

  const createKullanici = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Registered Successfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  return (
    <YetkiContext.Provider
      value={{
        createKullanici,
      }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContextProvider;
