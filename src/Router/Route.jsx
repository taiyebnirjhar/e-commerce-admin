import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/regester",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
