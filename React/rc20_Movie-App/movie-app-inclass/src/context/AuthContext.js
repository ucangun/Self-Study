import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alanı açtık
export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //register için (sitede chain fetch işlemi var biz burada async await i tercih ettik)

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Registered Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  return (
    <AuthContextt.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
