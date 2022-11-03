import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { clearDataFromLs, deleteDataFromLs } from "../../utilities/manageDb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { cart: cartData } = useLoaderData();

  // ** cart data paisi but amra user k ekta delete button dibo tai sorasori cart data ta use korbo na ekta state a rekhe use korbo bcz user delete korle amader cart er data  Change hote pare

  const [cart, setCart] = useState(cartData);

  const clearCartHandler = () => {
    // ** clear from UI
    setCart([]);
    // ** clear from db as well
    clearDataFromLs();
  };

  const deleteHandler = (id) => {
    const remainingProducts = cart.filter((product) => product._id !== id);
    setCart(remainingProducts);
    deleteDataFromLs(id);
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            deleteHandler={deleteHandler}
            product={product}
            key={product._id}
          />
        ))}
        {cart.length === 0 && (
          <h1>
            No items Found,<Link to="/">Click to Shop!</Link>
          </h1>
        )}
      </div>
      <div className="cart-container">
        <Cart clearCartHandler={clearCartHandler} cart={cart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
