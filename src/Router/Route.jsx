import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Loading from "../Pages/Loading/Loading";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import AddCustomer from "../Views/AddCustomer";
import AddProduct from "../Views/AddProduct";
import Customer from "../Views/Customer";
import Dashboard from "../Views/Dashboard";
import Products from "../Views/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
      {
        path: "/customers/new",
        element: <AddCustomer />,
      },
      {
        path: "/products/new",
        element: <AddProduct />,
      },
      ,
      {
        path: "/orders",
        element: <div>hello</div>,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
