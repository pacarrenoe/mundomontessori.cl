import React from "react";
import "../../styles/productos.css";
import Carousel from "../carrusel/Carousel";

const Productos = () => {
  return (
    <>
      <div className="centro">Productos</div>;
      <section className="products">
        <div className="products__description">
          <h3>Explora nuestros productos</h3>
          <p>Trabajamos distintos tipos de modelos, nuestra madera de 2x2</p>
        </div>
        <Carousel></Carousel>
      </section>
    </>
  );
};

export default Productos;
