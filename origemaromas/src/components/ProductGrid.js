import React from 'react';
import './ProductGrid.css';

export default ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>     
            <div className="productGridArea">
                {Object.keys(items).length > 0 && items.map((items, key) => (
                    <img src={items.image} />
                ))}
            </div>
        </div>
    )
}