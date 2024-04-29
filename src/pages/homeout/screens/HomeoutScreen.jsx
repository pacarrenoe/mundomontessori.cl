import React from "react";
import "../styles/homeout.css";
import Banner from "../../../components/banner/Banner";

import Productos from "../components/productos/Productos";

const HomeoutScreen = () => {
  return (
    <div>
      <Banner></Banner>
      <Productos></Productos>
    </div>
  );
};

export default HomeoutScreen;
