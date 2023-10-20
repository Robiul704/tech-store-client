import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import AddProduct from "./pages/navber/AddProduct";
import MyCart from "./pages/navber/MyCart";
import AuthProvider from "./AuthProvider";
import Signin from "./ACCOUNT/Signin";
import Root from "./Root";
import Signup from "./ACCOUNT/Signup";
import Products from "./pages/home/Products";
import Private from "./Private";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Error";
import Update from "./pages/home/Update";
import Details from "./pages/home/Details";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/brand')
      },
     {
      path:'/addproduct',
      element:<Private><AddProduct></AddProduct></Private>
     },
     {
      path:'/mycart/:name',
      element:<Private><MyCart></MyCart></Private>,
      loader:({params})=>fetch(`http://localhost:5000/mycart/${params.name}`)
     },
     {
      path:'/mycart',
      element:<Private><MyCart></MyCart></Private>,
     
     },
     {
      path:'/signin',
      element:<Signin></Signin>
     },
     {
      path:'/signup',
      element:<Signup></Signup>
     },
     {
      path:'/product/:brand',
      element:<Products></Products>,
      loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`)
     },
     {
      path:'/update/:id',
      element:<Private><Update></Update></Private>,
      loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
     },
     {
      path:'/details/:id',
      element:<Private><Details></Details></Private>,
      loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
     }
   
    
]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer />
  </React.StrictMode>
);