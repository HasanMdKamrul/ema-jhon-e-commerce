import React from 'react';
import './Product.css';

const Product = ({product:{name,id,img,price,category,ratingsCount}}) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='product-content'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
            </div>
        </div>
    );
};

export default Product;