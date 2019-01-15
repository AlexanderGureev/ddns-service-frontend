import { Layout, Menu, Icon } from "antd";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import sideMenuBg from "./img/sidemenu-bg.svg";
import logo from "./img/sidemenu-logo.svg";
import miniLogo from "./img/sidemenu-mini-logo.svg";
import { Link } from "react-router-dom";
import dashboardIcon from "./img/dashboard.svg";
import dnsIcon from "./img/dns.svg";
import settingsIcon from "./img/settings.svg";
import supportIcon from "./img/support.svg";
import userIcon from "./img/user.svg";

const { Header, Sider, Content } = Layout;

const logoShow = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const LogoContainer = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 125px;
  height: 120px;
  animation: ${logoShow} 2s ease;
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.4));
`;
const Text = styled.p`
  font-size: 28px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${logoShow} 2s ease;
`;

const LogoLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 160px;
`;

const MiniLogo = styled(Logo)``;
LogoContainer.Text = Text;
LogoContainer.Logo = Logo;
LogoContainer.MiniLogo = MiniLogo;
LogoContainer.Link = LogoLink;

const MenuIcon = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 28px;
  height: auto;
`;

const MenuText = styled.span`
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #fff;
  padding-left: 25px;
`;
const MenuItem = styled(Menu.Item)`
  display: flex !important;
  align-items: center !important;
`;

const MenuBtn = styled(Icon)`
  position: absolute;
  top: 20px;
  left: 40px;
  font-size: 25px;
  color: #707070;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    left: -5px;
    top: -5px;
    background: white;
    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
    z-index: -1;
    border-radius: 5px;
  }
`;
MenuItem.Icon = MenuIcon;
MenuItem.Text = MenuText;

const SideMenuContainer = styled(Sider)`
  height: 100vh;
  min-height: 600px;
  background: url(${props => props.src}) no-repeat center top !important;
  background-size: cover !important;
  width: 300px;
  .ant-menu {
    background: transparent;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #3b30a191;
  }
  .ant-menu-inline-collapsed > .ant-menu-item {
    padding: 0 25px !important;
  }
`;

const Panel = props => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

  return (
    <Layout>
      <SideMenuContainer
        width={300}
        src={sideMenuBg}
        trigger={null}
        collapsible
        collapsed={visible}
      >
        <LogoContainer>
          {!visible ? (
            <LogoContainer.Logo src={logo} />
          ) : (
            <LogoContainer.MiniLogo src={miniLogo} />
          )}
          {!visible && <LogoContainer.Text>fsr-ddns</LogoContainer.Text>}
          <LogoContainer.Link to="/" />
        </LogoContainer>

        <Menu defaultSelectedKeys={["1"]}>
          <MenuItem key="1">
            <MenuItem.Icon src={dashboardIcon} />
            <MenuItem.Text>Dashboard</MenuItem.Text>
          </MenuItem>
          <MenuItem key="2">
            <MenuItem.Icon src={dnsIcon} />
            <MenuItem.Text>Dynamic DNS</MenuItem.Text>
          </MenuItem>
          <MenuItem key="3">
            <MenuItem.Icon src={settingsIcon} />
            <MenuItem.Text>My Services</MenuItem.Text>
          </MenuItem>
          <MenuItem key="4">
            <MenuItem.Icon src={userIcon} />
            <MenuItem.Text>Account</MenuItem.Text>
          </MenuItem>
          <MenuItem key="5">
            <MenuItem.Icon src={supportIcon} />
            <MenuItem.Text>Support Center</MenuItem.Text>
          </MenuItem>
        </Menu>
      </SideMenuContainer>

      <Layout>
        <Header
          style={{ background: "#fff", padding: 0, position: "relative" }}
        >
          <MenuBtn
            className="trigger"
            type={visible ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Panel;
