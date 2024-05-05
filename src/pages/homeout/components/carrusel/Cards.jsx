import React from "react";
import "../../styles/carousel.css";

const Cards = ({ product }) => {
  let numero = "+56982005373";
  let mensaje = `Hola buen día, vi el ${product.title} en su página web. ¿Podría darme más información sobre las entregas, color, material, etc? Gracias!`;

  return (
    <>
      <section className="card__product">
        <div className="product__img">
          <div className="product__img__container">
            <img src={product.image} alt={product.title} />
          </div>
          <button className="product__button">
            <a
              href={`https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
                mensaje
              )}`}
              target="_blank"
            >
              Cotiza este producto aquí
            </a>
          </button>
          {/* <div className="product__body">
            <h2>{product.title}</h2>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Cards;
