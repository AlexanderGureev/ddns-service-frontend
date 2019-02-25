import React, { useState } from "react";
import { Link } from "react-router-dom";
import backIcon from "./img/back.svg";
import {
  CollapsedMenu as Menu,
  Button,
  CollapseMenuWrapper,
  CloseBtn
} from "./styles";
import menuBtn from "./img/menuBtn.svg";

const BurgerMenu = props => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive(!active);

  return (
    <Menu>
      <Button onClick={toggleMenu} src={menuBtn} name="menuBtn" />
      <CollapseMenuWrapper
        width={320}
        placement="left"
        closable={false}
        onClose={toggleMenu}
        visible={active}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Sign up</Link>
        <Link to={{ pathname: "/login", state: { invert: true } }}>Log in</Link>
        <Link to="/managed">Dynamic DNS</Link>
        <Link to="/managed">Managed DNS</Link>
        <Link to="/managed">Domains</Link>
        <Link to="/managed">Services</Link>
        <Link to="/managed">Support</Link>

        <CloseBtn onClick={toggleMenu} src={backIcon} />
      </CollapseMenuWrapper>
    </Menu>
  );
};
export default BurgerMenu;
