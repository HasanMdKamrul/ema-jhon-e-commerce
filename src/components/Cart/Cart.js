import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCartHandler, children }) => {
  const quantity = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0
  );
  const totalShipping = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.shipping,
    0
  );
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = +(totalPrice + totalShipping + tax).toFixed(2);

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <div className="calculation">
        <p>Selected items: {quantity} </p>
        <p>Total price: ${totalPrice} </p>
        <p>Total Shipping Charge: ${totalShipping} </p>
        <p>Tax: ${tax} </p>
        <h5>Grand Total: ${grandTotal} </h5>
        {/* <button onClick={clearCartHandler}>Clear Cart</button> */}
        {children}
      </div>
    </div>
  );
};

export default Cart;
