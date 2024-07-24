import React from "react";
import ContactForm from "../pages/ContactForm";
import NotFound from "../pages/NotFound";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const name = "Umut";
  const password = "1234";

  return name === "Umut" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

// kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,

export default PrivateRouter;
