import { Link } from "react-router-dom";
import styled from "styled-components";
import { Anchor } from "antd";
import { ButtonLink } from "../Common/Button";

import { ReactComponent as HeaderLogo } from "./img/logo.svg";

export const HeaderWrapper = styled.div`
  height: 100vh;
  min-height: 860px;
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
  @media (max-width: 460px) {
    padding: 30px 30px 0;
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
const LogoIcon = styled(HeaderLogo)`
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

const LogoLink = styled(Link)`
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
  font-family: "Montserrat";
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
  @media (max-width: 460px) {
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
  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
const HeaderButton = styled(ButtonLink)`
  font-weight: 500;
  a {
    padding: 15px 60px;
  }
  text-transform: uppercase;
  @media (max-width: 460px) {
    a {
      padding: 10px 30px;
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

  @media (max-width: 460px) {
    width: 50px;
    height: 50px;
  }
`;
const ScrollBtnIcon = styled.div`
  position: absolute;
  left: 7px;
  top: 8px;
  width: 80%;
  height: 80%;
  background: url(${props => props.src}) no-repeat center center;

  @media (max-width: 460px) {
    left: 10px;
    width: 60%;
    height: 60%;
  }
`;
const AntdLink = styled(Anchor.Link)``;

ScrollBtn.Icon = ScrollBtnIcon;
ScrollBtn.Link = AntdLink;
HeaderContent.Title = HeaderTitle;
HeaderContent.Caption = HeaderCaption;
HeaderContent.Button = HeaderButton;

export const Menu = styled.div`
  font-family: "Montserrat";
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

const MenuBtn = styled(ButtonLink)`
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
Menu.Item = MenuItem;
Menu.Button = MenuBtn;
