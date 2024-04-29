import React from "react";
import "../../styles/carousel.css";

const Cards = ({ product }) => {
  return (
    <>
      <section className="card__product">
        <div className="product__img">
          <div className="product__img__container">
            <img src="https://picsum.photos/id/1011/800/450" alt="" />
          </div>
          <div className="product__body">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
