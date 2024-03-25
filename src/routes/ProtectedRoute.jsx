import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem("isLoggedIn"));

  return userAuth ? <>{children}</> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
