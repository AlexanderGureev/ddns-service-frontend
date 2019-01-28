import React from "react";
import { Menu } from "antd";
import { SideMenuContainer, LogoContainer, MenuItem } from "./styles";
import ShortProfile from "./ShortProfile";
import dashboardIcon from "./img/dashboard.svg";
import dnsIcon from "./img/dns.svg";
import settingsIcon from "./img/settings.svg";
import supportIcon from "./img/support.svg";
import userIcon from "./img/user.svg";

const SideMenu = ({ visible, match }) => (
  <SideMenuContainer width={300} trigger={null} collapsible collapsed={visible}>
    <LogoContainer>
      {!visible ? <LogoContainer.Logo /> : <LogoContainer.MiniLogo />}
      <LogoContainer.Link to="/" />
    </LogoContainer>

    <Menu defaultSelectedKeys={["1"]}>
      <MenuItem key="1">
        <MenuItem.Icon src={dashboardIcon} />
        <MenuItem.Link to={`${match.url}`}>Dashboard</MenuItem.Link>
      </MenuItem>
      <MenuItem key="2">
        <MenuItem.Icon src={dnsIcon} />
        <MenuItem.Link to={`${match.url}`}>Dynamic DNS</MenuItem.Link>
      </MenuItem>
      <MenuItem key="3">
        <MenuItem.Icon src={settingsIcon} />
        <MenuItem.Link to={`${match.url}`}>My Services</MenuItem.Link>
      </MenuItem>
      <MenuItem key="4">
        <MenuItem.Icon src={userIcon} />
        <MenuItem.Link to={`${match.url}/account`}>Account</MenuItem.Link>
      </MenuItem>
      <MenuItem key="5">
        <MenuItem.Icon src={supportIcon} />
        <MenuItem.Link to={`${match.url}`}>Support Center</MenuItem.Link>
      </MenuItem>
    </Menu>
    {!visible && <ShortProfile />}
  </SideMenuContainer>
);

export default SideMenu;
