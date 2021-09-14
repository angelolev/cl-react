import { Route, Redirect } from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ isLoggedIn, Component, ...rest }) => {
  console.log(isLoggedIn, "logueado?");
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
