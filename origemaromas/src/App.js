import React, { useEffect, useState } from "react";
import Api from "./Api";
import ProductGrid from "./components/ProductGrid";
import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

export default () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pega a lista da API
      let list = await Api.getProducts();
      setProductList(list);
    };
    loadAll();
  }, []);

  return (
    <div>
      <div className="page">
        <section className="productsList">
          {productList &&
            productList.map((item, key) => (
              <ProductGrid key={key} title={item.title} items={item.items} />
            ))}
        </section>
      </div>
    </div>
  );
};
