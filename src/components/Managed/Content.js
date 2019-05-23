import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { Content as StyledContent, NoMathContent } from "./styles";

import Loader from "./Loader";
import ConfirmEmail from "./ConfirmEmail";

const MainPage = lazy(() => import("./MainPage"));
const ProfilePage = lazy(() => import("./Profile"));
const PricingPage = lazy(() => import("./Pricing"));
const HostnamePage = lazy(() => import("./Hostname"));

const validPath = [
  "/managed",
  "/managed/pricing",
  "/managed/hostnames",
  "/managed/account",
  "/managed/verify"
];

const Content = props => {
  const {
    match: { url },
    location: { pathname }
  } = props;

  return (
    <StyledContent>
      <Suspense fallback={<Loader />}>
        {validPath.includes(pathname) && <ConfirmEmail {...props} />}
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
          <Route component={NoMathContent} disableLink />
        </Switch>
      </Suspense>
    </StyledContent>
  );
};

export default Content;
