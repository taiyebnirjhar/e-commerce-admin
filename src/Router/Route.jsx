import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Loading from "../Pages/Loading/Loading";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import AddCustomer from "../Views/AddCustomer";
import AddProduct from "../Views/AddProduct";
import BookDetails from "../Views/BookDetails";
import Customer from "../Views/Customer";
import Dashboard from "../Views/Dashboard";
import LandingPage from "../Views/LandingPage";
import LandingProduct from "../Views/LandingProduct";
import Order from "../Views/Order";
import Products from "../Views/Products";
import LoaderRoute from "./LoaderRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <LoaderRoute>
            <LandingPage />
          </LoaderRoute>
        ),
      },
      {
        path: "/books",
        element: (
          <LoaderRoute>
            <LandingProduct />
          </LoaderRoute>
        ),
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/dash",
    element: (
      // <PrivateRoute>
      <LoaderRoute>
        <Main />
      </LoaderRoute>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/dash/products",
        element: <Products />,
      },
      {
        path: "/dash/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dash/customers",
        element: <Customer />,
      },
      {
        path: "/dash/customers/new",
        element: <AddCustomer />,
      },
      {
        path: "/dash/products/new",
        element: <AddProduct />,
      },

      {
        path: "/dash/orders",
        element: <Order />,
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
