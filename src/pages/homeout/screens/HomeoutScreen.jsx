import React from "react";
import "../styles/homeout.css";
import Banner from "../../../components/banner/Banner";

import Productos from "../components/productos/Productos";
import Politicas from "../components/politicas/Politicas";
import Nosotros from "../components/nosotros/Nosotros";

const HomeoutScreen = () => {
  return (
    <div>
      <Banner></Banner>
      <Productos />
      <Politicas />
      <Nosotros />
    </div>
  );
};

export default HomeoutScreen;
