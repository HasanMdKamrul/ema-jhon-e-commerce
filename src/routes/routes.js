import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import PrivateRoutes from "../components/PrivateRotes/PrivateRoutes";
import Shipping from "../components/Shipping/Shipping";
import Shops from "../components/Shops/Shops";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layouts/Main";
import { ProductsAndCartLoaders } from "../loaders/ProductsAndCartLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shops />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ProductsAndCartLoaders,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoutes>
            <Shipping />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
