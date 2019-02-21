import React from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "./styles";
import { ReactComponent as DashboardIcon } from "./img/dashboard.svg";
import { ReactComponent as SettingsIcon } from "./img/settings.svg";
import { ReactComponent as DnsIcon } from "./img/dns.svg";
import { ReactComponent as AccountIcon } from "./img/account.svg";
import { ReactComponent as SupportIcon } from "./img/support.svg";
import { ReactComponent as PriceIcon } from "./img/price-tag.svg";
import { ReactComponent as HostnameIcon } from "./img/hostnames.svg";

const SideMenu = ({ match: { url } }) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      <Menu.Item.Icon component={DashboardIcon} />
      <Menu.Item.Text>Dashboard</Menu.Item.Text>
      <Menu.Item.Link to={`${url}`} />
    </Menu.Item>
    <Menu.Item key="2">
      <Menu.Item.Icon component={HostnameIcon} />
      <Menu.Item.Text>Hostnames</Menu.Item.Text>
      <Menu.Item.Link to={`${url}/hostnames`} />
    </Menu.Item>
    <Menu.Item key="3">
      <Menu.Item.Icon component={PriceIcon} />
      <Menu.Item.Text>Pricing</Menu.Item.Text>
      <Menu.Item.Link to={`${url}`} />
    </Menu.Item>
    <Menu.Item key="4">
      <Menu.Item.Icon component={AccountIcon} />
      <Menu.Item.Text>Account</Menu.Item.Text>
      <Menu.Item.Link to={`${url}/account`} />
    </Menu.Item>
    <Menu.Item key="5">
      <Menu.Item.Icon component={SupportIcon} />
      <Menu.Item.Text>Support Center</Menu.Item.Text>
      <Menu.Item.Link to={`${url}/error`} />
    </Menu.Item>
  </Menu>
);

export default withRouter(SideMenu);
