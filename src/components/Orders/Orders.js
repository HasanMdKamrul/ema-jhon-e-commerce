import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const {cart,products} = useLoaderData();
    console.log(cart,products)
    return (
        <div>
            <h1>This is Orders Page</h1>
        </div>
    );
};

export default Orders;