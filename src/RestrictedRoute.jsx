
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectorsAuth"


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};