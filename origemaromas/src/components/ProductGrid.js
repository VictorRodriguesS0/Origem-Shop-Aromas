import React from 'react';
import './ProductGrid.css';

export default ({title, items}) => {
    return (
        <div className="productGrid">
            <h2>{title}</h2>     
            <div className="productGrid--area">
                {Object.keys(items).length > 0 && items.map((items, key) => (
                    <div key={key} className="productGrid--item">
                        <text>
                            {items.titulo}
                        </text>
                        <img src={items.imagem} alt={items.title}/>
                            {items.descricao}
                            <div>
                                R$ {items.preco}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}