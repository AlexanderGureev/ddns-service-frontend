import React from "react";
import { useStore } from "easy-peasy";
import { Route, Redirect } from "react-router-dom";
import MessageConstructor from "./LoadingMessage";

const message = MessageConstructor();

const isConfirmEmailRoute = ({ pathname = "", search = "" }, isAuth) => {
  const validPathname = "/managed/verify";
  if (search && pathname === validPathname && !isAuth) {
    setTimeout(
      () => message.error("You must be logged in to verify your mail."),
      1500
    );
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useStore(state => state.session);
  isConfirmEmailRoute(rest.location, isAuth);

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
              state: {
                pathname: props.location.pathname,
                search: props.location.search
              }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
