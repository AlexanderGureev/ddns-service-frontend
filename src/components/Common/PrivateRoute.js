import React from "react";
import { useStore } from "easy-peasy";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useStore(state => state.session);
  const { location } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { pathname: location.pathname, search: location.search }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
