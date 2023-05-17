import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsRefreshing, selectIsLoggedIn } from "redux/auth/selectorsAuth"


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};