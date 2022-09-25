import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.table(cart)
    const totalPrice = cart.reduce((previousValue,currentValue)=> previousValue + currentValue.price,0);
    const totalShipping = cart.reduce((previousValue,currentValue)=> previousValue + currentValue.shipping,0);
    const tax = +((totalPrice * 0.1).toFixed(2));

    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='cart'>
           <h1>Order Summary</h1>
            <div className='calculation'>
                <p>Selected items:{cart.length} </p>  
                <p>Total price: ${totalPrice} </p>
                <p>Total Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax} </p>
                <h5>Grand Total: ${grandTotal} </h5>
            </div>
        </div>
    );
};

export default Cart;