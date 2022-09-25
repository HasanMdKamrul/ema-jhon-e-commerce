import React, { useEffect, useState } from 'react';
import { getLsData, setLsData } from '../../utilities/manageDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
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

    // ** get the stored data

    useEffect(()=>{
        // ** get stored data
        const storedCart = getLsData();
        
        for (const key in storedCart) {
            
            const addedProduct = products.find(product => product.id === key);

            console.log(addedProduct)
        }

    },[])

    const handleAddToCart = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart);
        // ** store the data to ls
        setLsData(product.id)
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;