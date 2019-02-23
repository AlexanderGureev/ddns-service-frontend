import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Content as StyledContent } from "./styles";

import NoMatch from "../Common/NoMatch";
import ConfirmEmail from "./ConfirmEmail";

const MainPage = lazy(() => import("./MainPage"));
const ProfilePage = lazy(() => import("./Profile"));
const PricingPage = lazy(() => import("./Pricing"));
const HostnamePage = lazy(() => import("./Hostname"));

const Content = props => {
  const {
    match: { url }
  } = props;

  return (
    <StyledContent>
      <ConfirmEmail {...props} />
      <Suspense fallback={<span>Loading page...</span>}>
        <Switch>
          <Route
            path={url}
            exact
            render={routeProps => <MainPage {...routeProps} />}
          />
          <Route
            path={`${url}/hostnames`}
            render={routeProps => <HostnamePage {...routeProps} />}
          />
          <Route
            path={`${url}/pricing`}
            render={routeProps => <PricingPage {...routeProps} />}
          />
          <Route
            path={`${url}/account`}
            render={routeProps => <ProfilePage {...routeProps} />}
          />
          <Route
            path={`${url}/verify`}
            render={routeProps => <MainPage {...routeProps} />}
          />
          <Route component={NoMatch} disableLink />
        </Switch>
      </Suspense>
      {/* <Footer /> */}
    </StyledContent>
  );
};

export default Content;
