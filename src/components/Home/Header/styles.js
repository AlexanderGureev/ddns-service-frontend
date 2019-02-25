import { Link } from "react-router-dom";
import styled from "styled-components";

import React from "react";
import { Drawer } from "antd";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StyledButton, { ButtonLink } from "../Common/Button";
import { ReactComponent as HeaderLogo1 } from "./img/logo_new.svg";
import { ReactComponent as MenuBg } from "./img/side-menu-bg.svg";

export const HeaderWrapper = styled.div`
  height: 100vh;
  min-height: 900px;
  width: 100%;
  padding: 20px 100px 0 100px;
  background: url(${props => props.src}) no-repeat right top;
  background-size: contain;
  position: relative;

  @media (max-width: 1200px) {
    padding: 20px 30px 0 100px;
  }

  @media (max-width: 970px) {
    background-size: cover;
    background-position: right center;
    padding: 50px 50px 0;
  }
  @media (max-width: 560px) {
    padding: 30px 30px 0;
    min-height: 600px;
  }
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  position: relative;
`;
const LogoIcon = styled(HeaderLogo1)`
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 970px) {
    display: none;
  }
  a {
    width: 500px;
    height: 500px;
  }
`;

const LogoLink = styled(Link).attrs(props => ({
  name: props.name,
  "aria-hidden": "true"
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
`;
Logo.Link = LogoLink;
Logo.Icon = LogoIcon;

export const HeaderContent = styled.div`
  width: 600px;
  margin-top: 200px;
  color: #012052;
  line-height: 1.4;
  @media (max-width: 1400px) {
    width: 500px;
  }
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 970px) {
    color: #fff;
    width: 100%;
    text-align: center;
    margin: 150px auto 0;
  }
`;
const HeaderTitle = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 30px;
  @media (max-width: 1400px) {
    font-size: 42px;
  }
  @media (max-width: 1200px) {
    font-size: 38px;
  }
  @media (max-width: 560px) {
    font-size: 27px;
  }
`;

const HeaderCaption = styled(HeaderTitle)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }
`;
const HeaderButton = styled(ButtonLink)`
  font-weight: 500;
  a {
    padding: 15px 60px;
  }
  text-transform: uppercase;
  @media (max-width: 560px) {
    a {
      padding: 15px 40px;
    }
    font-size: 16px;
  }
`;
export const ScrollBtn = styled.div`
  position: relative;
  bottom: -25%;
  margin: 0 auto;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background: linear-gradient(140deg, #11013c, #083269);
  box-shadow: 0 10px 20px rgba(0, 28, 118, 0.32);
  cursor: pointer;

  @media (max-width: 560px) {
    width: 50px;
    height: 50px;
    bottom: -15%;
  }
`;
const ScrollBtnIcon = styled.div`
  position: absolute;
  left: 7px;
  top: 8px;
  width: 80%;
  height: 80%;
  background: url(${props => props.src}) no-repeat center center;

  @media (max-width: 560px) {
    left: 10px;
    width: 60%;
    height: 60%;
  }
`;
const AntdLink = styled(AnchorLink).attrs(props => ({
  name: props.name,
  "aria-hidden": "true"
}))`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
`;

ScrollBtn.Icon = ScrollBtnIcon;
ScrollBtn.Link = AntdLink;
HeaderContent.Title = HeaderTitle;
HeaderContent.Caption = HeaderCaption;
HeaderContent.Button = HeaderButton;

export const Menu = styled.div`
  font-weight: 400;
  color: #fff;

  @media (max-width: 970px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  color: #fff;
  transition: 0.3s ease;
  white-space: nowrap;
  padding: 0 30px;
  font-size: 20px;
  :hover {
    color: #8ee0ff;
  }
  + div {
    margin-left: 15px;
  }

  @media (max-width: 1680px) {
    padding: 0 15px;
    font-size: 18px;
  }
  @media (max-width: 1400px) {
    + div {
      margin-left: 10px;
    }
    padding: 0 10px;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    + div {
      margin-left: 5px;
    }
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const MenuBtn = styled(ButtonLink)`
  a {
    @media (max-width: 1400px) {
      font-size: 16px;
      padding: 8px 40px;
    }
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
`;
const MenuButton = styled(StyledButton)`
  @media (max-width: 1400px) {
    font-size: 16px;
    padding: 8px 40px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

Menu.Item = MenuItem;
Menu.ButtonLink = MenuBtn;
Menu.Button = MenuButton;

export const Button = styled.div.attrs(props => ({
  name: props.name
}))`
  background: url(${props => props.src});
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-size: contain;
`;

const Background = styled(MenuBg)`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
`;

export const CollapseMenuWrapper = props => (
  <CollapseMenu {...props}>
    <Background />
    {props.children}
  </CollapseMenu>
);
const CollapseMenu = styled(Drawer)`
  .ant-drawer-wrapper-body {
    min-height: 600px;
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
export const CloseBtn = styled.div`
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
export const CollapsedMenu = styled.div`
  display: none;
  @media (max-width: 970px) {
    display: inline;
  }
`;
