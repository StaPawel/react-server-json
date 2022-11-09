import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, Route, Routes } from 'react-router-dom'
import About from './About';
import Product from './Product';
import Products from './Products';

const Home = (props) => {
  
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>
  <Routes>
    <Route path='/about' element= {<About/>} />
    <Route path='/products/*' element= {<Products/>} />
   
    
  </Routes>
    </div>

    // <div>
    //   {product.map(product =>
    //     <div class="product" key={product.id}>
    //       {product.title}
    //     </div>
    //   )}
    // </div>
  );
}

export default Home;



  //   fetch('http://localhost:3000/products', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
        
  //         "id": 13,
  //         "title": "Product 13",
  //         "category": "books",
  //         "price": 13000,
  //         "description": "This is description about product 13 from fetch"
  //     })
  //   })
  // .then((response) => response.json())
  // .then((data) => console.log(data));