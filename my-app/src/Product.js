import { useState, useEffect, createContext } from "react";
import { renderMatches, useParams } from "react-router-dom";

import { Link, Routes, Route } from 'react-router-dom';
import Cart from "./Cart";

const Product = (props) => {

  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const ProductIdContext = createContext()


  useEffect(() => {
    fetch(`http://localhost:3000/products?id=${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [])


  return (
    <div>
      {product.map(product =>
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      )}
      <Link to='/cart' state={{id: id}}>Add to cart </Link>
     

    </div >
  );
}

export default Product;
