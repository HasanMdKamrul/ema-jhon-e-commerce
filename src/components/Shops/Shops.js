import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  //   const { count, products } = useLoaderData();

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  //   ** number of pages

  const [dataSize, setDataSize] = useState(10);

  console.log(dataSize);

  //   ** current page number

  const [currentPage, setCurrentPage] = useState(0);

  // ** total number of pages

  const numberOfPages = Math.ceil(count / dataSize);

  // ** pagination

  // ** total data count -> 76 -> done
  // ** perPage data -> 10
  //   ** page count -> 76/10 -> Math.celi(76/10) -> koto gula page hobe
  // ** page number -> kon page a asi

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/products?page=${currentPage}&&dataSize=${dataSize}`
        );
        response.ok ? console.log("ok") : console.log("failed");
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, [currentPage, dataSize]);

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

      <div className="pagination">
        <div>
          <p>Currently selected page : {currentPage}</p>
          {[...Array(numberOfPages).keys()].map((number) => (
            <button
              className={number === currentPage && "selected"}
              onClick={() => setCurrentPage(number)}
              key={number}
            >
              {number}
            </button>
          ))}
          {/* ** dynamic per page data */}
          <select
            onChange={(event) => {
              setCurrentPage(0);
              setDataSize(event.target.value);
            }}
          >
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shops;
