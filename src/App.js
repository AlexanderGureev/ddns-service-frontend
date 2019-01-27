import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, StoreProvider } from "easy-peasy";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Managed from "./components/Managed";
import ChangePassword from "./components/Auth/ChangePassword";
import model from "./model";
import PrivateRoute from "./components/Common";

const store = createStore(model);

const App = () => {
  useEffect(() => {
    store.dispatch.user.authorizeUserAction();
  }, []);

  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Auth} />
          <PrivateRoute path="/password/change" component={ChangePassword} />
          <PrivateRoute path="/managed/" component={Managed} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
