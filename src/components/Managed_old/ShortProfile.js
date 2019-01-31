import React, { useState } from "react";
import { useStore, useAction } from "easy-peasy";
import { Popover } from "antd";
import { withRouter } from "react-router-dom";
import { ShortProfile as StyledShortProfile } from "./styles";
import ShortProfilePopover from "./ShortProfilePopover";
import avaIcon from "./img/ava-icon.svg";

const ShortProfile = ({ history }) => {
  const { username, email } = useStore(state => state.session.profile);
  const { logoutUserAction } = useAction(dispatch => dispatch.session);
  const [visible, setVisible] = useState(false);

  const logout = e => {
    e.preventDefault();
    logoutUserAction().then(() => history.push("/"));
  };
  const handleVisibleChange = () => setVisible(!visible);

  return (
    <StyledShortProfile>
      <StyledShortProfile.Avatar size={100} src={avaIcon} />
      <StyledShortProfile.Container>
        <StyledShortProfile.Name>{username}</StyledShortProfile.Name>
        <StyledShortProfile.Email>{email}</StyledShortProfile.Email>
      </StyledShortProfile.Container>
      <Popover
        content={<ShortProfilePopover logout={logout} />}
        title="g.alex00@bk.ru"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <StyledShortProfile.Button type="align-left" />
      </Popover>
    </StyledShortProfile>
  );
};
export default withRouter(ShortProfile);
