import React, { useState } from "react";
import ViewProduct from "../ViewProduct/ViewProduct";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
    display: isOverlayVisible ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  const productDetailsStyles = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <>
    <ViewProduct
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      addToCart={addToCart}
    />

    <div style={overlayStyles}>
      <div style={productDetailsStyles}>
        <h2>{title}</h2>
        <img src={img} alt={title} style={{ width: "200px" }} />
        <p>Price: {newPrice}</p>
        <button onClick={() => setIsOverlayVisible(false)}>Close</button>
      </div>
    </div>
    </>
  );
};

export default Card;