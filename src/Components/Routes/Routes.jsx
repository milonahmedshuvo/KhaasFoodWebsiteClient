import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Home/Home";
import ProductsLayout from "../Products/ProductsLayout";
import Categoris from "../Products/Categoris";
import Register from "../Register/Register";
import Login from "../../Login/Login";



export const router= createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/products",
                element: <ProductsLayout></ProductsLayout>,
                children: [
                    {
                        path: '/products/name/:id',
                        element: <Categoris></Categoris>,
                        loader: async ({params}) => fetch(`https://khaas-food-server.vercel.app/clikName/${params.id}`)
                    }
                ]
            }
        ]
    }
])