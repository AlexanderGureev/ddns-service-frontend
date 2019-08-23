import React from "react";
import { useStoreState } from "easy-peasy";
import { Route, Redirect } from "react-router-dom";

const isConfirmEmailRoute = ({ pathname = "", search = "" }, isAuth) => {
  const validPathname = "/managed/verify";
  if (search && pathname === validPathname && !isAuth) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useStoreState(state => state.session);
  const isConfirmLink = isConfirmEmailRoute(rest.location, isAuth);
  const state = {
    pathname: rest.location.pathname,
    search: rest.location.search
  };

  if (isConfirmLink) {
    state.invert = true;
  }

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
              state
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
