import { Fragment, useEffect, useState } from 'react'
import ProductCart from '../components/ProductCart'
import { useSearchParams } from 'react-router-dom';
export default function Home() {
  const [products,setProducts]=useState([]);
  const[searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    .then(res =>res.json())
    .then(res=>setProducts(res.products))
  },[searchParams])
  return <Fragment>
    <h1 id="products_heading">Latest Products</h1>
    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product =><ProductCart product={product}/>)}
        <ProductCart></ProductCart>
      </div>
    </section>
  </Fragment>
}