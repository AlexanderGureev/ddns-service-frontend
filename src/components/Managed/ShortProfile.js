import React, { useRef, useEffect } from "react";
import { Dropdown } from "antd";
import { useStore, useActions } from "easy-peasy";
import { withRouter } from "react-router-dom";
import { ReactComponent as MenuIcon } from "./img/down-arrow.svg";
import ShortProfilePopover from "./ShortProfilePopover";

import { ShortProfile as StyledShortProfile } from "./styles";
import MessageConstructor from "../Common/LoadingMessage";

const loadingMessage = MessageConstructor();

const ShortProfile = ({ history }) => {
  const { firstName, lastName, avatarPath } = useStore(
    state => state.session.profile
  );
  const { logoutUserAction } = useActions(actions => actions.session);
  const loadingIndicator = useRef(null);
  const setLoadingIndicator = () => {
    loadingIndicator.current = loadingMessage.open("Logout...");
  };
  const clearLoadingIndicator = () => loadingIndicator.current();

  useEffect(
    () => {
      if (loadingIndicator.current) clearLoadingIndicator();
      return () => {
        clearLoadingIndicator();
      };
    },
    [loadingIndicator.current]
  );

  const logout = async e => {
    e.preventDefault();
    setLoadingIndicator();
    await logoutUserAction();
    history.push("/");
  };

  return (
    <StyledShortProfile>
      <StyledShortProfile.Name>
        {`${firstName} ${lastName}`}
      </StyledShortProfile.Name>
      <StyledShortProfile.Avatar src={avatarPath} />

      <Dropdown
        overlay={<ShortProfilePopover logout={logout} />}
        trigger={["click"]}
      >
        <StyledShortProfile.Menu component={MenuIcon} />
      </Dropdown>
    </StyledShortProfile>
  );
};

export default withRouter(ShortProfile);
