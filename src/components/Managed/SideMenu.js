import React from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "./styles";
import { ReactComponent as DashboardIcon } from "./img/dashboard.svg";
import { ReactComponent as AccountIcon } from "./img/account.svg";
import { ReactComponent as SupportIcon } from "./img/support.svg";
import { ReactComponent as PriceIcon } from "./img/price-tag.svg";
import { ReactComponent as HostnameIcon } from "./img/hostnames.svg";

const SideMenu = ({ match: { url } }) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      <Menu.Icon component={DashboardIcon} />
      <Menu.Text>Dashboard</Menu.Text>
      <Menu.Link to={`${url}`} />
    </Menu.Item>
    <Menu.Item key="2">
      <Menu.Icon component={HostnameIcon} />
      <Menu.Text>Hostnames</Menu.Text>
      <Menu.Link to={`${url}/hostnames`} />
    </Menu.Item>
    <Menu.Item key="3">
      <Menu.Icon component={PriceIcon} />
      <Menu.Text>Pricing</Menu.Text>
      <Menu.Link to={`${url}/pricing`} />
    </Menu.Item>
    <Menu.Item key="4">
      <Menu.Icon component={AccountIcon} />
      <Menu.Text>Account</Menu.Text>
      <Menu.Link to={`${url}/account`} />
    </Menu.Item>
    <Menu.Item key="5">
      <Menu.Icon component={SupportIcon} />
      <Menu.Text>Support Center</Menu.Text>
      <Menu.Link to={`${url}/error`} />
    </Menu.Item>
  </Menu>
);

export default withRouter(SideMenu);
