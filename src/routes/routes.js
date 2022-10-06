import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Orders from "../components/Orders/Orders";
import Shops from '../components/Shops/Shops';
import Main from "../layouts/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Shops/>,
                loader: ()=> fetch(`products.json`),
            },
            {
                path: '/orders',
                element: <Orders/>,
                loader: ()=> fetch(`products.json`),
            },
            {
                path: '/inventory',
                element: <Inventory/>
            },
            {
                path: '/about',
                element: <About/>
            },
        ],
    }
]);

export default router;