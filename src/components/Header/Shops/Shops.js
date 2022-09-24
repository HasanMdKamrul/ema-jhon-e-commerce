import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shops.css';


// ** Shop ta total container componet -> 2 componet child will be inside it 

const Shops = () => {
    // ** data load state 

    const [products,setProducts] = useState([]);

    const [cart,setCart] = useState([]);


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
    }, []);

    const handleAddToCart = (product)=> {
        const newCart = [...cart, product];

        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* ** Products container(products card will be here) */}
                {
                    products?.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                {/* ** order summary component */}
                <h1>This is order</h1>
                <p>Selected products:{cart.length} </p>
            </div>
        </div>
    );
};

export default Shops;