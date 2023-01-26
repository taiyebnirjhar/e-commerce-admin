import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GeneralDataContext } from "../Context/GeneralContext";

function PrivateRoute({ children }) {
  const { user } = useContext(GeneralDataContext);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default PrivateRoute;
