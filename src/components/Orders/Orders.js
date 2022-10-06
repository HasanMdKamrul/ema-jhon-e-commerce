import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>This is Orders Page: {products.length}</h1>
        </div>
    );
};

export default Orders;