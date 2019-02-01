import React from "react";
import { Popover } from "antd";
import { useStore, useAction } from "easy-peasy";
import { withRouter } from "react-router-dom";
import { ReactComponent as MenuIcon } from "./img/down-arrow.svg";
import avaIcon from "./img/ava.jpg";
import ShortProfilePopover from "./ShortProfilePopover";
import { ShortProfile as StyledShortProfile } from "./styles";

const ShortProfile = ({ visible, handleVisibleChange, history }) => {
  const { username, email = "none", firstName, lastName } = useStore(
    state => state.session.profile
  );
  const { logoutUserAction } = useAction(dispatch => dispatch.session);
  const logout = e => {
    e.preventDefault();
    logoutUserAction().then(() => history.push("/"));
  };

  return (
    <StyledShortProfile>
      <StyledShortProfile.Name>
        {`${firstName} ${lastName}`}
      </StyledShortProfile.Name>
      <StyledShortProfile.Avatar src={avaIcon} />
      <Popover
        content={<ShortProfilePopover logout={logout} />}
        title={email}
        trigger="click"
        placement="bottomRight"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <StyledShortProfile.Menu component={MenuIcon} />
      </Popover>
    </StyledShortProfile>
  );
};

export default withRouter(ShortProfile);
