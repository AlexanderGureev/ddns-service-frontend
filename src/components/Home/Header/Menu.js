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
        <Link to="/auth/">Sign up</Link>
        <p>Log in</p>
        <p>Dynamic DNS</p>
        <p>Managed DNS</p>
        <p>Domains</p>
        <p>Services</p>
        <p>Support</p>
      </СollapseMenuWrapper>
      <MenuBtn src={isSmall ? btnWhite : btnBlack} onClick={changeStateMenu} />
      {isMedium && (
        <TopMenu>
          <TopMenu.Item>
            <Link to="/">Dynamic DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/">Managed DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/">Domains</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/">Services</Link>
          </TopMenu.Item>
          <TopMenu.Item btn>
            <Link to="/auth/">Sign up</Link>
          </TopMenu.Item>
        </TopMenu>
      )}
    </MenuWrapper>
  );
};

export default Menu;
