import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Home/Home";
import ProductsLayout from "../Products/ProductsLayout";
import Categoris from "../Products/Categoris";
import Register from "../Register/Register";
import Login from "../../Login/Login";
import FruitsMain from "../../HomeToDatails/Fruits/FruitsMain";
import AddToCard from "../../HomeComponents/AddToCard/AddToCard";
import FishMain from "../../HomeToDatails/Fish/FishMain";
import Honey from "../../HomeComponents/Honey/Honey";
import SingleHoney from "../../HomeComponents/Honey/SingleHoney";
import HoneyMain from "../../HomeToDatails/Honey/HoneyMain";
import MeatMain from "../../HomeToDatails/Meat/MeatMain";
import BlogDetails from "../../HomeComponents/Blog/BlogDetails";



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
                path: "/addToCard/:id",
                element: <AddToCard> </AddToCard>,
                loader: async ({params}) => fetch(`http://localhost:5000/fruits/${params.id}`)
            },
            {
                path:"/fruits",
                element: <FruitsMain></FruitsMain>
            },
            {   
                path: '/fishs',
                element: <FishMain></FishMain>

            },
            {
                path: "/honeySee",
                element: <HoneyMain></HoneyMain>
            },
            {
                path:"/meatSee",
                element: <MeatMain></MeatMain>
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: async ({params}) => fetch(`http://localhost:5000/blogDetails/${params.id}`)
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