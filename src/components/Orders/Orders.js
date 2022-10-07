import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteDataFromLs } from "../../utilities/manageDb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { cart: cartData, products } = useLoaderData();

  // ** cart data paisi but amra user k ekta delete button dibo tai sorasori cart data ta use korbo na ekta state a rekhe use korbo bcz user delete korle amader cart er data  Change hote pare

  const [cart, setCart] = useState(cartData);

  const deleteHandler = id => {
    const remainingProducts = cart.filter(product => product.id !== id);
    setCart(remainingProducts);
    deleteDataFromLs(id)
  }

  return (
    <div className="shop-container">
      <div className="orders-container">
        {
            cart.map(product => <ReviewItem deleteHandler={deleteHandler} product={product} key={product.id}/>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
