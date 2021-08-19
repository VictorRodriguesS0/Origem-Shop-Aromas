import React from "react";
import "./ProductGrid.css";
import "./ProductItem"
import ProductItem from "./ProductItem";

export default ({ title, items }) => {
  const produtos = items.filter((produto) => {
    return produto.titulo != null;
  });
  console.log(produtos);

  return (
    <div className="productGrid">
        
      <h2>{title}</h2>
      <div className="productGrid--area">
        {produtos.map((produtos, key) => (
            <ProductItem key={key} item={produtos}/>
        ))}
      </div>
    </div>
  );
};
