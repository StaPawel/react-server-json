
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom'
import Product from './Product';

const Products = (props) => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, [])

//   const id = useParams()

    return (
        <div>
        <div>
        {products.map(product =>
          <div className="product" key={product.id}>
          <Link to='/products/1'>{product.title}</Link>
          </div>
        )}
      </div>

      <Routes>
      <Route path='/*' element= {<Product xd="xd"/>} />
    </Routes>

      </div>
    );
  }
  
  export default Products;
  