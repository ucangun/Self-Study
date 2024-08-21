import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default AppRouter;
