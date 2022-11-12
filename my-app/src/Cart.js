import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";

const Cart = (props) => {

    const { the } = useParams()
    // const productIdContext = useContext(ProductIdContext);
    // console.log(productIdContext);

    

    const location = useLocation();
    const { id } = location.state
    console.log(id)

    const newCart = {
        productId: id
    };

    useEffect(() => {
        fetch('http://localhost:3000/cart', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCart),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div>
            <p>cart</p>
        </div>
    );
}

export default Cart;

