import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess, toastWarn } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alanı açtık
export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver();
  }, []);

  //register için (sitede chain fetch işlemi var biz burada async await i tercih ettik)

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Registered Successfully");
      navigate("/");

      //? USERTAKİPTEN SONRA -----kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userTakip sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor.alttakini yazmazsam (register ile girdiğimde) navbarda displayName i göremem. alttakini yazmazsam sadece google ile girersem görürüm

      await updateProfile(auth.currentUser, { displayName: displayName });
    } catch (error) {
      toastError(error.message);
    }
  };

  // login islemi

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Logged in Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  // google ile giriş

  //* https://console.firebase.google.com/

  const signUpGoogle = () => {
    //?google hesaplarına ulaşmak için firebase metodu
    const provider = new GoogleAuthProvider();

    //?açılır pencere ile giriş yapılması için firebase metodu

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Logged in Successfully");
        navigate("/");
      })
      .catch((error) => {
        toastError(error.message);
      });
  };

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  // logout

  const logout = async () => {
    try {
      await signOut(auth);
      toastSuccess("Logged out Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarn("Please check your mail box!");
      })
      .catch((err) => {
        toastError(err.message);
      });
  };

  return (
    <AuthContextt.Provider
      value={{
        createUser,
        signIn,
        signUpGoogle,
        currentUser,
        logout,
        forgotPassword,
      }}
    >
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
