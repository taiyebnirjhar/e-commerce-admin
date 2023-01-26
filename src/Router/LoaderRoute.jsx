import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GeneralDataContext } from "../Context/GeneralContext";
import Loading from "../Pages/Loading/Loading";

function LoaderRoute({ children }) {
  const { loading, setLoading } = useContext(GeneralDataContext);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      //   setLoading(prev => !prev)
      setLoading(false);
    }, 300);
  }, [location]);

  if (!children || loading) {
    return <Loading />;
  } else {
    return children;
  }
}

export default LoaderRoute;
