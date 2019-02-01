import "antd/dist/antd.css";
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

import Preloader from "./components/Common/Preloader";
import PrivateRoute from "./components/Common/PrivateRoute";
import NoMatch from "./components/Common/NoMatch";
import ErrorBoundary from "./components/Common/ErrorBoundary";

const Home = lazy(() => import("./components/Home"));
const Auth = lazy(() => import("./components/Auth"));
const Managed = lazy(() => import("./components/Managed"));
const ChangePassword = lazy(() => import("./components/Auth/ChangePassword"));

const App = () => {
  useEffect(() => {
    store.dispatch.session.createOrRecoverySessionAction();
  }, []);

  return (
    <StoreProvider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Preloader>Loading page...</Preloader>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login/" component={Auth} />
              <Route path="/reset/password" component={ChangePassword} />
              <PrivateRoute path="/managed" component={Managed} />
              <Route component={NoMatch} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </StoreProvider>
  );
};

export default App;
