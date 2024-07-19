import React, { useState } from "react";
import "../data.json";
import "./ProductCard.css";
import cartSVG from "../../assets/images/icon-add-to-cart.svg";

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  image: string;
  index: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  category,
  image,
  index,
}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="product-card">
      <div className="product-image-div">
        <img className="product-images" src={image} alt={name} key={index} />
        <div className="button-div">
          <button className="product-button">
            <img src={cartSVG} className="product-cart" />
            <h6 className="add-to-cart">Add to Cart</h6>
          </button>
        </div>
      </div>
      {/*<div className="product-info">*/}
      <h6 className="product-category">{category}</h6>
      <h6 className="product-name">{name}</h6>
      <h6 className="product-price">{`$ ${price.toFixed(2)}`}</h6>
      {/*</div>*/}
    </div>
  );
};

export default ProductCard;
