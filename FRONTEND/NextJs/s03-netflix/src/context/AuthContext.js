"use client";

import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";

// auth(yetki) işlemlerini yaptığımız context

export const YetkiContext = createContext();

//* custom hook

export const useAuthContext = () => {
  return useContext(YetkiContext);
};

const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  // register
  const createKullanici = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Registered Successfully");
      router.push("/login");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // login
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Logged in Successfully");
      router.push("/profile");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // logout
  const logout = async () => {
    try {
      await signOut(auth);
      toastSuccessNotify("Logged out Successfully");
      router.push("/login");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // Sign in and up with Google

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccessNotify("Logged in Successfully");
        router.push("/profile");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
      });
  };

  return (
    <YetkiContext.Provider
      value={{
        createKullanici,
        signIn,
        logout,
        signInWithGoogle,
      }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContextProvider;
