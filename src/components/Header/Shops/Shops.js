import React, { useEffect, useState } from 'react';
import './Shops.css';
const Shops = () => {
    // ** data load state 

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        // ** data loader 
        const loadProducts = async ()=>{
            try {
                const response = await fetch(`products.json`);
                response.ok ? console.log('Successful') : console.log('failed');
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        };

        loadProducts()
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>This is Shop: {products.length}</h1>
            </div>
            <div className="cart-container" style={{border: "2px solid grey",height:"100vh"}}>
                <h1>This is order</h1>
            </div>
        </div>
    );
};

export default Shops;