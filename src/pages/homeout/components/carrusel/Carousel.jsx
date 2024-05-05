import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cards from "./Cards";
import "../../styles/carousel.css";

// import { fetchProducts } from "../../../../services/productService";
import products from "../../../helper/data";

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    320: { items: 1 },
    576: { items: 1 },
    684: { items: 2 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
    1400: { items: 4 },
    1600: { items: 4 },
    1800: { items: 4 },
  };

  const items = products.map((product) => (
    <Cards key={product.id} product={product} />
  ));
  const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>&lt;</span>;
  };

  const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>&gt;</span>;
  };

  return (
    <>
      <div className="carousel__products">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          disableSlideInfo={false}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </>
  );
};

export default Carousel;
