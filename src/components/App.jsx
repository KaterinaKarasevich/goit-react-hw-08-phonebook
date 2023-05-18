
import { lazy} from "react";
import {Layout} from "components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "redux/auth/selectorsAuth";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operationAuth";
import Loader from "./Loader";
import { PrivateRoute } from "PrivateRoute";
import { RestrictedRoute } from "RestrictedRoute";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("pages/HomePage/HomePage"))
const ContactsPage = lazy(() => import("pages/ContactsPage/CotactsPage"))
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"))
const RegisterPage  = lazy(() => import("pages/RegisterPage/RegisterPage"))
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}/>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};