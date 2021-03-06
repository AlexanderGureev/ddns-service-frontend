import React, { useState } from "react";
import { useMedia } from "react-use";
import { Link } from "react-router-dom";
import { useAction, useStore } from "easy-peasy";
import { MenuBtn, CollapseMenuWrapper, MenuWrapper, TopMenu } from "./styles";
import btnBlack from "./img/menu-black.svg";
import btnWhite from "./img/menu-white.svg";

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const { isAuth } = useStore(state => state.session);
  const { logoutUserAction } = useAction(dispatch => dispatch.session);

  const changeStateMenu = () => setVisible(!visible);
  const closeMenu = () => setVisible(false);
  const logout = e => {
    e.preventDefault();
    logoutUserAction();
  };
  const isSmall = useMedia("(max-width: 900px)");
  const isMedium = useMedia("(min-width: 1100px)");

  return (
    <MenuWrapper>
      <CollapseMenuWrapper
        width={350}
        placement="left"
        closable={false}
        onClose={closeMenu}
        visible={visible}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Sign up</Link>
        <Link to={{ pathname: "/login", state: { invert: true } }}>Log in</Link>
        <Link to="/managed">Dynamic DNS</Link>
        <Link to="/managed">Managed DNS</Link>
        <Link to="/managed">Domains</Link>
        <Link to="/managed">Services</Link>
        <Link to="/managed">Support</Link>
      </CollapseMenuWrapper>
      <MenuBtn src={isSmall ? btnWhite : btnBlack} onClick={changeStateMenu} />
      {isMedium && (
        <TopMenu>
          <TopMenu.Item>
            <Link to="/managed">Dynamic DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed">Managed DNS</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed">Domains</Link>
          </TopMenu.Item>
          <TopMenu.Item>
            <Link to="/managed">Services</Link>
          </TopMenu.Item>
          <TopMenu.Item btn>
            {isAuth ? (
              <a href="/" onClick={logout}>
                Log out
              </a>
            ) : (
              <Link to="/login">Sign up</Link>
            )}
          </TopMenu.Item>
        </TopMenu>
      )}
    </MenuWrapper>
  );
};

export default Menu;
