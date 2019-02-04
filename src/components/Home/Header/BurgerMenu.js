import React, { useState } from "react";
import styled from "styled-components";
import { Elastic } from "react-burgers";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import { ReactComponent as MenuBg } from "./img/side-menu-bg.svg";
import backIcon from "./img/back.svg";

const Button = styled(Elastic)`
  color: #083269;
`;

const Background = styled(MenuBg)`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
`;

const CollapseMenuWrapper = props => (
  <CollapseMenu {...props}>
    <Background />
    {props.children}
  </CollapseMenu>
);
const CollapseMenu = styled(Drawer)`
  .ant-drawer-wrapper-body {
    min-height: 400px;
  }
  .ant-drawer-content {
    position: relative;
  }

  .ant-drawer-header {
    border-radius: 0;
  }
  .ant-drawer-body {
    margin-top: 150px;

    a,
    p {
      margin-bottom: 10px;
      display: block;
      text-align: center;
      font-size: 18px;
      font-family: "Montserrat";
      font-weight: 400;
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        color: #8ee0ff;
      }
    }
  }
`;
const CloseBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.2) url(${props => props.src}) no-repeat center
    center;
  background-size: 50% 50%;
  cursor: pointer;
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 970px) {
    display: inline;
  }
`;
const BurgerMenu = props => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive(!active);
  const isMedium = useMedia("(min-width: 970px)");

  return (
    <Menu>
      <Button
        color={isMedium ? "#083269" : "#fff"}
        active={active}
        onClick={toggleMenu}
      />
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
