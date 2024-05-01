import React, { useState } from "react";
import "../../styles/nosotros.css";

const Nosotros = () => {
  const [push, setPush] = useState();

  return (
    <>
      <div className="centro">Nosotros</div>;
      <section className="aboutUs">
        <div className="aboutUs__titulo">
          <h1>
            Bienvenido a <span>Mundo Montessori</span>
          </h1>
          <p>¿Quieres saber mas de nosotros?</p>
        </div>
        <div className="aboutUs__description">
          <p>
            Somos un negocio familiar dedicado a la fabricación y venta de camas
            infantiles Montessori. Nuestra historia comenzó cuando buscábamos
            una cama didáctica y segura para nuestra hija, lo que nos llevó a
            crear nuestras propias camas a medida. Durante un periodo difícil,
            decidimos publicar nuestras camas en el Marketplace de Facebook y
            abrir una cuenta de Instagram para llegar a más personas. Nuestra
            misión es ofrecer camas seguras, funcionales y hermosas, basadas en
            los principios Montessori, para el desarrollo y autonomía de los
            niños. Hasta ahora, hemos tenido un gran éxito y muchas ventas, pero
            nos hemos mantenido enfocados en mantener la calidad de nuestros
            productos. Estamos entusiasmados por la oportunidad de expandir
            nuestra línea de productos de madera en el futuro y seguir mejorando
            para satisfacer las necesidades de nuestros clientes.
          </p>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
