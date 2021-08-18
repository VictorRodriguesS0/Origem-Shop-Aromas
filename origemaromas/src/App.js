import React, { useEffect, useState } from 'react'
import Api from './Api'
import ProductGrid from './components/ProductGrid'
import './App.css'

export default () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pega a lista da API
      let list = await Api.getProducts();
      console.log(list)
      setProductList(list)
    }
    loadAll();
  }, [])

  return (
    <div className="page">
      <section className="productsList">
        {productList.map((item, key) => (
          
          <ProductGrid key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}