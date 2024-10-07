import React, { useContext } from "react";
import { AuthContextt } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContextt);

  return currentUser ? <Outlet /> : <Navigate />;
};

export default PrivateRouter;
