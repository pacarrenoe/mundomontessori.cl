import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomeoutScreen from "../pages/homeout/screens/HomeoutScreen";

const RouterMain = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<HomeoutScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterMain;
