import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Layout as AntdLayout,
  Menu as AntdMenu,
  Icon as AntdIcon,
  Input as AntdInput,
  Row as AntdRow,
  Col as AntdCol,
  Tabs,
  Alert,
  Badge as AntdBadge
} from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "./img/side-menu-logo.svg";
import { ReactComponent as MiniLogoIcon } from "./img/managed-mini-logo.svg";

const { Header: AntdHeader, Content: AntdContent, Sider, Footer } = AntdLayout;
const { TabPane: AntdTabPane } = Tabs;

const logoShow = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1
}
`;

export const Layout = styled(AntdLayout)`
  height: 100vh;
  overflow-x: hidden;
`;
export const StyledSide = styled(Sider)`
  background: linear-gradient(
    140deg,
    #1f5ad1,
    rgba(23, 56, 122, 0.8)
  ) !important;
  box-shadow: 5px 0px 25px rgba(0, 0, 0, 0.1);
`;

export const Content = styled(AntdContent)`
  margin: 24px 16px 0;
  overflow: initial;
  min-width: 200px;
`;
export const Menu = styled(AntdMenu)`
  position: relative;
  background: none !important;

  .ant-menu-item {
    font-size: 20px;
    font-family: "Montserrat";
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px !important;
    padding: 0 29px !important;
  }

  .ant-menu-item-selected {
    background: linear-gradient(
      140deg,
      rgba(142, 52, 211, 0.9),
      rgba(29, 94, 223, 0.7)
    );
  }
`;

export const Header = styled(AntdHeader)`
  background: #fff !important;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px 0 0 !important;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  min-width: 200px;
`;

export const Logo = styled(LogoIcon)`
  width: 280px;
  cursor: pointer;
  animation: ${logoShow} 0.5s ease;
`;
export const MiniLogo = styled(MiniLogoIcon)`
  width: 78px;
  cursor: pointer;
  animation: ${logoShow} 0.5s ease;
`;
export const StyledCircle = styled.div`
  position: absolute;
  background: linear-gradient(140deg, #6ee8fd, rgba(44, 166, 187, 0.45));
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.35));
  border-radius: 50%;
  top: ${props => `${props.top}%`};
  right: ${props => `${props.right}%`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px `};
  opacity: ${props => props.opacity || 1};
  z-index: 0;
`;

export const ShortProfile = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  background: url(${props => props.src}) no-repeat top center;
  background-size: cover;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  @media (max-width: 1300px) {
    margin-left: 10px;
  }
`;
const ShortProfileBtn = styled(AntdIcon)`
  cursor: pointer;
  font-size: 18px !important;
`;

const Name = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  color: #707070;
  font-size: 16px;
  margin: 0 20px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const Icon = styled(AntdIcon)`
  position: relative;
  top: 2px;
  font-size: 23px !important;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const BtnContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  cursor: pointer;
  margin: 0 20px;
  i {
    top: 0 !important;
    padding: 12px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Search = styled(AntdInput.Search)`
  width: 300px;
  margin: 0 40px;

  @media (max-width: 690px) {
    width: auto;
    min-width: 120px;
    margin: 0;
    display: none;
  }

  input {
    border: none;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    padding: 12px 20px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px !important;
  }
  span {
    height: 100%;

    button {
      height: 100% !important;
      background-color: #fff;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
      border: none;

      border-radius: 0 5px 5px 0 !important;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      i {
        font-size: 20px !important;
        color: #707070;
        position: relative;
        top: 2px;
      }
    }
  }
`;

export const Card = styled.div`
  padding: 20px 40px;
  background: linear-gradient(
    135deg,
    ${props => props.colorA},
    ${props => props.colorB}
  );
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    padding: 15px 20px;
  }
`;
const CardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  font-size: 25px;
  color: #fff;
  text-align: ${props => (props.center ? "center" : "left")};
  padding-bottom: ${props => (props["no-padding"] ? "0" : "10px")};

  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CardContent = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  padding: ${props => (props.gutter ? "20px 0 0 0" : "0")};
`;

const CardText = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  display: block;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CardSmallText = styled(CardText)`
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const CardRow = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
export const CardBackgroundCircles = () => (
  <>
    <StyledCircle size={40} top={50} right={5} />
    <StyledCircle size={25} top={10} right={30} />
    <StyledCircle size={20} top={60} right={35} />
  </>
);
const ContentWrapper = styled.div`
  padding: 24px;
  background: #fff;
  text-align: center;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;
const CardFooter = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  transition: 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
const CardButton = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const MenuText = styled.span``;
const MenuLink = styled(Link)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
`;

export const Badge = styled(AntdBadge)`
  .ant-badge-dot,
  .ant-badge-count {
    background-color: #4e8bbc;
  }
`;
export const Col = styled(AntdCol)`
  @media (max-width: 992px) {
    padding-bottom: 30px;
  }
`;
export const Row = styled(AntdRow)`
  padding-bottom: 50px;
  @media (max-width: 992px) {
    padding-bottom: 0px;
  }
`;

export const TabPane = styled(AntdTabPane)`
  text-align: left;
  @media (max-width: 680px) {
    font-size: 12px;
  }
`;

export const ShortProfileContainer = styled.div`
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 400;
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProfileItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #039dc53d;
  }
`;

const ProfileItemIcon = styled(AntdIcon)`
  font-size: 16px;
`;

const ProfileItemText = styled.span`
  padding-left: 10px;
`;

const ProfileItemLink = styled(ProfileItemText)``;
export const StyledAlert = styled(Alert)``;

export const StyledFooter = styled(Footer)`
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat";
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 560px) {
    padding: 20px 0;
    font-size: 12px;
  }
`;

ShortProfileContainer.List = ProfileList;
ShortProfileContainer.Item = ProfileItem;
ShortProfileContainer.Item.Icon = ProfileItemIcon;
ShortProfileContainer.Item.Text = ProfileItemText;
ShortProfileContainer.Item.Link = ProfileItemLink;

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Content.Text = CardText;
Card.Content.SmallText = CardSmallText;
Card.Row = CardRow;
Card.Footer = CardFooter;
Card.Button = CardButton;

ShortProfile.Avatar = Avatar;
ShortProfile.Menu = ShortProfileBtn;
ShortProfile.Name = Name;

Header.Container = Container;
Content.Wrapper = ContentWrapper;

Menu.Item.Text = MenuText;
Menu.Item.Icon = Icon;
Menu.Item.Link = MenuLink;
