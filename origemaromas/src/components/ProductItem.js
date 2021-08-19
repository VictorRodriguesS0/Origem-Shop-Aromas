import React from "react";
import './ProductGrid.css'

export default ({ item }) => {

  return (
    <div className="productGrid">
      <div className="productGrid--area">
          <div className="productGrid--item">
            <h3>{item.titulo}</h3>
            <img src={item.imagem} alt={item.title} />
            {item.descricao}
            <div>R$ {item.preco}</div>
          </div>
      </div>
    </div>
  );
};
