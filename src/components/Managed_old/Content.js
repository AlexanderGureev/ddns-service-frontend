import React from "react";
import { Route, Switch } from "react-router-dom";
import { StyledContent } from "./styles";
import ConfirmEmail from "./ConfirmEmail";
import MainPage from "./MainPage";
import ProfilePage from "./ProfilePage";
import contentBg from "./img/content-bg-managed.svg";
import NoMatch from "../Common/NoMatch";

const Content = props => {
  const {
    match: { url }
  } = props;

  return (
    <StyledContent src={contentBg}>
      <Switch>
        <Route path={url} exact component={MainPage} />
        <Route path={`${url}/account`} component={ProfilePage} />
        <Route path={`${url}/verify`} component={MainPage} />
        <Route component={NoMatch} disableLink />
      </Switch>
      <ConfirmEmail {...props} />
    </StyledContent>
  );
};

export default Content;
