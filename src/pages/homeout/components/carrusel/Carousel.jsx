import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cards from "./Cards";
import "../../styles/carousel.css";

import { fetchProducts } from "../../../../services/productService";

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
    1800: { items: 5 },
  };

  const [products, setProducts] = useState([]);

  const items = products.map((product) => (
    <Cards key={product.id} product={product} />
  ));

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      if (data) {
        setProducts(data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="carousel__products">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite
          // autoPlay
          // autoPlayInterval={2000}
          disableButtonsControls
        />
      </div>
    </>
  );
};

export default Carousel;
