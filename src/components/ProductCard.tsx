import React, { useState } from "react";

const ProductCard = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="product-card">
      <div>
        <img src={props.img} alt={props.title} key={props.index} />
        <div>
          <img src={props.cart} key={props.index} alt={props.title} />
          <h6>Add to Cart</h6>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{}</p>
        <h6 className="product-name">{}</h6>
        <h6 className="product-price">{}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
