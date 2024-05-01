import React from "react";
import "../../styles/productos.css";
import Carousel from "../carrusel/Carousel";

const Productos = () => {
  return (
    <>
      <section className="products">
        <div className="products__description">
          <h1>
            Bienvenido a <span>Mundo Montessori</span>
          </h1>
          <p>Explora nuestra variedad de productos</p>
        </div>
        <Carousel></Carousel>
      </section>
    </>
  );
};

export default Productos;
