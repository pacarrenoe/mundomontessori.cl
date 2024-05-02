import React, { useState } from "react";
import "../../styles/nosotros.css";

const Nosotros = () => {
  const [push, setPush] = useState();

  return (
    <>
      <section className="aboutUs">
        <div className="aboutUs__title">
          <h1>¿Quienes somos?</h1>
        </div>
        <div className="aboutUs__description">
          <p>
            Somos un negocio familiar dedicado a la fabricación y venta de camas
            infantiles Montessori.
          </p>
          <p>
            <b>Nuestra historia</b> comenzó cuando buscábamos una cama didáctica
            y segura para nuestra hija, lo que nos llevó a crear nuestras
            propias camas a medida. Durante un periodo difícil, decidimos
            publicar nuestras camas en el Marketplace de Facebook y abrir una
            cuenta de Instagram para llegar a más personas. <br />{" "}
            <b>Nuestra misión</b> es ofrecer camas seguras, funcionales y
            hermosas, basadas en los principios Montessori, para el desarrollo y
            autonomía de los niños. Estamos entusiasmados por la oportunidad de
            expandir nuestra línea de productos de madera en el futuro y seguir
            mejorando para satisfacer las necesidades de nuestros clientes.
          </p>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
