import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Mobnavbar from "./components/Mobnavbar";
import Hero from "./components/Hero";
import Catergories from "./components/Catergories";
import Fruitsandvegetables from "./components/Fruitsandvegetables";
import Featurespage from "./components/Featurespage";
import BreakfastAndDairy from "./components/BreakfastAndDairy";
import Banner from "./components/Banner";
import LastBanner from "./components/LastBanner";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";

const Myapp = ({ setShow }) => {
  return (
    <>
      <Navbar setShow={setShow} />
      <Hero />
      <Mobnavbar setShow={setShow} />
      <Catergories />
      <Fruitsandvegetables />
      <Featurespage />
      <BreakfastAndDairy />
      <Banner />
      <LastBanner />
      <Signup />
      <Footer />
      <CopyRight />
    </>
  );
};

export default Myapp;
