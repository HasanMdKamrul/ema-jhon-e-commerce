import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
           <h1>This is order</h1>
            <p>Selected products:{cart.length} </p>  
        </div>
    );
};

export default Cart;