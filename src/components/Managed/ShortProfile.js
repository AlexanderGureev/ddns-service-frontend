import React, { useState } from "react";
import { useStore, useAction } from "easy-peasy";
import { Popover, Icon } from "antd";
import styled from "styled-components";
import { ShortProfile as StyledShortProfile } from "./styles";
import avaIcon from "./img/ava-icon.svg";

const ShortProfileContainer = styled.div`
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 400;
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProfileItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #039dc53d;
  }
`;

const ProfileItemIcon = styled(Icon)`
  font-size: 16px;
`;

const ProfileItemText = styled.span`
  padding-left: 10px;
`;

const ProfileItemLink = styled(ProfileItemText)``;

ShortProfileContainer.List = ProfileList;
ShortProfileContainer.Item = ProfileItem;
ShortProfileContainer.Item.Icon = ProfileItemIcon;
ShortProfileContainer.Item.Text = ProfileItemText;
ShortProfileContainer.Item.Link = ProfileItemLink;

const ShortProfilePopover = ({ logout }) => (
  <ShortProfileContainer>
    <ShortProfileContainer.List>
      <ShortProfileContainer.Item>
        <ShortProfileContainer.Item.Icon type="user" />
        <ShortProfileContainer.Item.Text>
          Account
        </ShortProfileContainer.Item.Text>
      </ShortProfileContainer.Item>
      <ShortProfileContainer.Item>
        <ShortProfileContainer.Item.Icon type="exception" />
        <ShortProfileContainer.Item.Text>
          Invoices
        </ShortProfileContainer.Item.Text>
      </ShortProfileContainer.Item>
      <ShortProfileContainer.Item onClick={logout}>
        <ShortProfileContainer.Item.Icon type="logout" />
        <ShortProfileContainer.Item.Link>
          Log out
        </ShortProfileContainer.Item.Link>
      </ShortProfileContainer.Item>
    </ShortProfileContainer.List>
  </ShortProfileContainer>
);
const ShortProfile = props => {
  const { username, email } = useStore(state => state.session.profile);
  const { logoutUserAction } = useAction(dispatch => dispatch.session);
  const [visible, setVisible] = useState(false);

  const logout = e => {
    e.preventDefault();
    logoutUserAction();
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
export default ShortProfile;
