import React from "react";
import { Switch, Route } from "react-router-dom";
import { Content as StyledContent } from "./styles";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ProfilePage from "./ProfilePage";
import NoMatch from "../Common/NoMatch";
import ConfirmEmail from "./ConfirmEmail";

const Content = props => {
  const {
    match: { url }
  } = props;

  return (
    <StyledContent>
      <ConfirmEmail {...props} />
      <Switch>
        <Route path={url} exact component={MainPage} />
        <Route path={`${url}/account`} component={ProfilePage} />
        {/* <Route path={`${url}/verify`} component={MainPage} /> */}
        <Route component={NoMatch} disableLink />
      </Switch>
      {/* <Footer /> */}
    </StyledContent>
  );
};

export default Content;
