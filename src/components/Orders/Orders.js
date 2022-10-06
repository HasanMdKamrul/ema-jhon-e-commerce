import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const {cart : cartData,products} = useLoaderData();
   

    // ** cart data paisi but amra user k ekta delete button dibo tai sorasori cart data ta use korbo na ekta state a rekhe use korbo bcz user delete korle amader cart er data  Change hote pare

    const [cart,setCart] = useState(cartData);

    return (
        <div className='shop-container'>
          <div className='products-container'>

          </div>
          <div className='cart-container'>
            <Cart cart={cart} />
          </div>
        </div>
    );
};

export default Orders;