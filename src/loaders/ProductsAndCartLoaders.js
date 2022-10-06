import { getLsData } from "../utilities/manageDb";

export const ProductsAndCartLoaders = async () => {
  // ** ei khane amader cart er jonno data lagbe
  // ** first a ekta empty cart banay nei

  const cart = [];

  // ** get all the products from the main Api

  const productsData = await fetch(`products.json`);
  const products = await productsData.json();

  // ** cart populate korbo ami jegla cart a add korsi oglar upor depend kore

  // ** Ami j click korsi ei data koi pabo ? -> localStorage a

  // ** get the saved data 'cart':{key(Productid):value(quantity of added Products)}

  // ** get the saved value from the ls

  const storedCart = getLsData();

  for (const id in storedCart) {
    // ** ekhon ei khane main products api theke localStorage a thaka id match kore kake kake add korsi sei product er full information ber kore nibo
    // ** er por main product jegla add hoise oglar quantity property update korbo using the saved quantity value in the localStorage

    const addedProduct = products.find((product) => product.id === id);

    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
      // ** ei j updated quantity with the product itself ja amra add korsi take amader notun banano cart er vitor push kore dibo

      cart.push(addedProduct);
    }
  }

  return { products, cart };
};
