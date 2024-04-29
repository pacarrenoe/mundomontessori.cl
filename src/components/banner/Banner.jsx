import React from "react";
import "./banner.css"; // Importa el archivo de estilos

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <div className="banner-content">
        <h1>Descubre el mundo de la crianza Montessori.</h1>
        <p>
          ¡Explora nuestra colección de camas Montessori y da con ellos un paso
          hacia la independencia y la exploración!
        </p>
        <button className="cta-button">Cotiza con nosotros</button>
      </div>
    </div>
  );
};

export default Banner;
