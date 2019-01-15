import React, { useState } from "react";
import btnBlack from "./img/menu-black.svg";
import btnWhite from "./img/menu-white.svg";
import menuImg from "./img/menu-bg.svg";
import { СollapseMenuWrapper, MenuBtn, MenuWrapper, TopMenu } from "./styles";
import { useMedia } from "react-use";
import { Link } from "react-router-dom";

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const changeStateMenu = () => setVisible(!visible);
  const closeMenu = () => setVisible(false);

  let isSmall = useMedia("(max-width: 900px)");
  let isMedium = useMedia("(min-width: 1100px)");

  return (
    <MenuWrapper>
      <СollapseMenuWrapper
        width={350}
        src={menuImg}
        placement="left"
        closable={false}
        onClose={closeMenu}
        visible={visible}
      >
        <Link to="/">Home</Link>
        <Link to="/login/">Sign up</Link>
        <Link to="/login/">Log in</Link>
        <Link to="/managed/">Dynamic DNS</Link>
        <Link to="/managed/">Managed DNS</Link>
        <Link to="/managed/">Domains</Link>
        <Link to="/managed/">Services</Link>
        <Link to="/managed/">Support</Link>
      </СollapseMenuWrapper>
      <MenuBtn src={isSmall ? btnWhite : btnBlack} onClick={changeStateMenu} />
      {isMedium && (
        <TopMenu>
          <TopMenu.Item>
            <Link to="/managed/">Dynamic DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed/">Managed DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed/">Domains</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed/">Services</Link>
          </TopMenu.Item>
          <TopMenu.Item btn>
            <Link to="/login/">Sign up</Link>
          </TopMenu.Item>
        </TopMenu>
      )}
    </MenuWrapper>
  );
};

export default Menu;
