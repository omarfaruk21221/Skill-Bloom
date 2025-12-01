import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import LoadingSpine from "../../Components/Loading/LoadingSpine";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);
  const location = useLocation();
  if (loading) {
    return <LoadingSpine />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth"}></Navigate>;
};

export default PrivetRoutes;
