import React from "react";
import { Menu } from "./styles";

const TopMenu = props => (
  <Menu>
    <Menu.Item to="/managed">Dynamic DNS</Menu.Item>
    <Menu.Item to="/managed">Managed DNS</Menu.Item>
    <Menu.Item to="/managed">Domains</Menu.Item>
    <Menu.Item to="/managed">Services</Menu.Item>
    <Menu.Button to="/login">Log in</Menu.Button>
  </Menu>
);
export default TopMenu;
