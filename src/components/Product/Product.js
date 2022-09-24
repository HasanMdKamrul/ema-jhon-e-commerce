import React from 'react';
import './Product.css';

const Product = ({product,product:{name,id,seller,img,price,category,ratings},handleAddToCart}) => {
   
    return (
        <div className='card'>
            <img src={img?img:"N/A"} alt="" />
            <div className='product-content'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <div className='product-extranal-info'>
                    <p>Manufacturer:{seller}</p>
                    <p>Ratings:{ratings}stars</p>
                </div>
            </div>
            <button type='button' onClick={()=>handleAddToCart(product)} className='cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;