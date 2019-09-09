import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStoreDispatch } from "easy-peasy";

import Preloader from "./Common/Preloader";
import PrivateRoute from "./Common/PrivateRoute";
import NoMatch from "./Common/NoMatch";
import ErrorBoundary from "./Common/ErrorBoundary";

const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./Auth"));
const Managed = lazy(() => import("./Managed"));
const ChangePassword = lazy(() => import("./Auth/ChangePassword"));

const App = () => {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch.session.createOrRecoverySessionAction();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Preloader>Loading page...</Preloader>}>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/login/" render={props => <Auth {...props} />} />
            <Route
              path="/reset/password"
              render={props => <ChangePassword {...props} />}
            />
            <PrivateRoute path="/managed" component={Managed} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
