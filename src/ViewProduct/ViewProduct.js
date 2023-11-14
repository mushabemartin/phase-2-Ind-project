import React, { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";

const ViewProduct = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);


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
      <div className="card" onClick={() => setIsOverlayVisible(true)}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <button>
                <BsFillBagFill className="bag-icon" />
              </button>
            </div>
          </section>
        </div>
      </div>

      <div style={overlayStyles}>
        <div style={productDetailsStyles}>
          <h2>{title}</h2>
          <img src={img} alt={title} style={{ width: "200px" }} />
          <p>Company: {company}</p>
          <p>Color: {color}</p>
          <p>Price: {newPrice}</p>
          <button onClick={() => setIsOverlayVisible(false)}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;