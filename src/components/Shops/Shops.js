import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  clearDataFromLs,
  getLsData,
  setLsData,
} from "../../utilities/manageDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shops.css";

// ** Shop ta total container componet -> 2 componet child will be inside it

const Shops = () => {
  // ** data load

  const products = useLoaderData();

  const [cart, setCart] = useState([]);

  const clearCartHandler = () => {
    // ** clear from UI
    setCart([]);
    // ** clear from db as well
    clearDataFromLs();
  };

  // ** get the stored data

  useEffect(() => {
    // ** get the ls data
    const storedCart = getLsData();
    const newCartFromLs = [];
    for (const id in storedCart) {
      const addedProductsToLs = products.find((product) => product._id === id);
      if (addedProductsToLs) {
        addedProductsToLs.quantity = storedCart[id];
        newCartFromLs.push(addedProductsToLs);
      }
    }
    setCart(newCartFromLs);
  }, [products]);

  const handleAddToCart = (product) => {
    const existedCartProduct = cart.find(
      (cartProduct) => cartProduct._id === product._id
    );
    let newCart = [];
    if (!existedCartProduct) {
      product.quantity = product.quantity + 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (cartProduct) => cartProduct._id !== existedCartProduct._id
      );
      existedCartProduct.quantity = existedCartProduct.quantity + 1;
      newCart = [...rest, existedCartProduct];
    }

    // const newCart = [...cart, product];
    setCart(newCart);
    // ** store the data to ls
    setLsData(product._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {/* ** Products container(products card will be here) */}
        {products?.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product._id}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* ** order summary component */}
        <Cart clearCartHandler={clearCartHandler} cart={cart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shops;
