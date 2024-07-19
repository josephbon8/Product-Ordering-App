import React, { useState } from "react";
import ProductCard from "./components/ProductCard.tsx";
import productData from "./data.json";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="outer-app-div">
      <h3>Desserts</h3>
      <div className="main-div">
        {productData.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <ProductCard
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image.desktop}
                index={product.id}
              ></ProductCard>
            </React.Fragment>
          );
        })}
      </div>
      <img />
    </div>
  );
}

export default App;
