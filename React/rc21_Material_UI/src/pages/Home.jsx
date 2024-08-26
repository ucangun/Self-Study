import React from "react";
import TypoButtons from "../components/TypoButtons";
import CardGrid from "../components/CardGrid";
import Navbar from "../components/Navbar";
import TextFieldComp from "../components/TextFieldComp";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TypoButtons /> */}
      <CardGrid />
      <TextFieldComp />
    </>
  );
};

export default Home;
