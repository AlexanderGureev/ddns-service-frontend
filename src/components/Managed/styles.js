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
  Badge as AntdBadge,
  Modal as AntdModal,
  Form as AntdForm,
  Button as AntdBtn,
  InputNumber
} from "antd";
import { Link } from "react-router-dom";
import NoMatch from "../Common/NoMatch";
import { ReactComponent as LogoIcon } from "./img/logo-managed.svg";
import { ReactComponent as MiniLogoIcon } from "./img/mini-logo-managed.svg";
import { ReactComponent as CircleIcons } from "./img/circleLayers.svg";

const { Header: AntdHeader, Content: AntdContent, Sider, Footer } = AntdLayout;
const { TabPane: AntdTabPane } = Tabs;

export const Modal = styled(AntdModal)`
  font-size: 16px;

  .ant-modal-footer,
  .ant-modal-header {
    border: none;
  }
  .ant-modal-footer button {
    padding: 6px 20px;
  }
`;
export const Form = styled(AntdForm)`
  .ant-form-explain {
    font-size: 12px;
  }
`;
Form.Item = styled(Form.Item)`
  :not(:last-child) {
    margin: 0 20px 20px 0 !important;
  }
`;

const logoShow = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1
}
`;

export const Layout = styled(AntdLayout)`
  && {
    height: 100vh;
    min-height: 700px;
    z-index: 10;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;
export const StyledSide = styled(Sider)`
  && {
    background: linear-gradient(140deg, #1f5ad1, rgba(23, 56, 122, 0.8));
    box-shadow: 5px 0px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled(AntdContent)`
  margin: 24px 16px 0;
  min-width: 200px;
  position: relative;
`;
export const Menu = styled(AntdMenu)`
  && {
    z-index: 12;
    position: relative;
    background: none;

    .ant-menu-item {
      font-size: 20px;
      font-weight: 400;
      color: #fff;
      margin-bottom: 10px;
      padding: 0 29px;
    }

    .ant-menu-item-selected {
      background: linear-gradient(
        140deg,
        rgba(142, 52, 211, 0.9),
        rgba(29, 94, 223, 0.7)
      );
    }
  }
`;

export const Header = styled(AntdHeader)`
  && {
    background: #fff;
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    padding: 0 20px 0 0;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    min-width: 200px;
  }
`;

export const Logo = props => (
  <LogoContainer>
    <StyledLogo />
    <Link to={props.to} />
  </LogoContainer>
);
export const MiniLogo = props => (
  <LogoContainer>
    <StyledMiniLogo />
    <Link to={props.to} />
  </LogoContainer>
);
const LogoContainer = styled.div`
  position: relative;
  margin: 30px 0 50px;
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const StyledLogo = styled(LogoIcon)`
  width: 280px;
  cursor: pointer;
  animation: ${logoShow} 0.5s ease;
`;
const StyledMiniLogo = styled(MiniLogoIcon)`
  width: 70px;
  padding-left: 7px;
  cursor: pointer;
  animation: ${logoShow} 0.5s ease;
`;

export const CircleLayer = styled(CircleIcons)`
  position: absolute;
  left: -140px;
  bottom: 0;
  width: 450px;
  z-index: 0;
`;

export const ShortProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
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
  && {
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
      font-weight: 400;
      font-size: 14px;
      border-radius: 5px;
    }
    span {
      height: 100%;

      button {
        height: 100% !important;
        background-color: #fff;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        border: none;

        border-radius: 0 5px 5px 0;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        i {
          font-size: 20px;
          color: #707070;
          position: relative;
          top: 2px;
        }
      }
    }
  }
`;

export const Card = styled.div`
  padding: 30px 40px;
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

const StyledCardCircle = styled.div`
  position: absolute;
  background: linear-gradient(140deg, #6ee8fd, rgba(44, 166, 187, 0.45));
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.35));
  border-radius: 50%;
  top: ${props => `${props.top}%`};
  left: ${props => `${props.left}%`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px `};
  opacity: ${props => props.opacity || 1};
  z-index: 0;

  @media (max-width: 1400px) {
    width: ${props => `${props.size - 8}px`};
    height: ${props => `${props.size - 8}px `};
  }

  @media (max-width: 991px) {
    top: ${props => `${props.top - 10}%`};
    left: ${props => `${props.left + 10}%`};
  }
  @media (max-width: 680px) {
    top: ${props => `${props.top - 10}%`};
    left: ${props => `${props.left}%`};
  }
`;
export const CardBackgroundCircles = () => (
  <>
    <StyledCardCircle size={40} top={55} left={80} />
    <StyledCardCircle size={25} top={15} left={65} />
    <StyledCardCircle size={20} top={70} left={60} />
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
  font-weight: 400;
  min-width: 200px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 20;
`;

const ProfileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 0;
`;

const ProfileItem = styled.li`
  && {
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #039dc53d;
    }
  }
`;

const ProfileItemIcon = styled(AntdIcon)`
  font-size: 16px;
`;

const ProfileItemText = styled.span`
  padding-left: 10px;
`;

const ProfileItemLink = styled(ProfileItemText)``;
export const StyledAlert = styled(Alert)`
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 560px) {
    font-size: 12px;
  }
  a {
    @media (max-width: 560px) {
      font-size: 10px;
      top: 7px;
    }
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 35%;
    display: block;
  }
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
  font-size: 14px;
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

Menu.Text = MenuText;
Menu.Icon = Icon;
Menu.Link = MenuLink;

export const CartContainer = styled.div`
  background: #fff;
  border-radius: 5px;

  height: 250px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
`;
export const CartBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  position: relative;
`;
export const NoContent = styled.div`
  padding-top: 50px;
  text-align: center;
`;
export const NoContentCartTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3b3b3b;
  text-transform: uppercase;
  margin: 0;
`;
export const NoContentCartCaption = styled.p`
  font-size: 14px;
  color: #222;
  margin: 0;
`;
export const CartButton = styled(AntdBtn)`
  && {
    background: linear-gradient(135deg, #60f282, #0382a0);
    border: none;
    color: #fff;
    font-weight: 500;
    box-shadow: 0 10px 15px rgba(96, 242, 130, 0.15);
    padding: 10px 20px;
  }
`;

export const CartContent = styled.div`
  width: 100%;
`;

export const CartTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    margin-right: 25px;
  }
`;
const CartItemLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
const CartItemName = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  white-space: nowrap;
  display: block;
`;
const CartItemPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  position: relative;
  display: block;

  ::after {
    content: "$";
    position: relative;
  }
`;
const CartItemInput = styled(InputNumber)`
  width: 60px !important;
  font-size: 16px;
  font-weight: 500;
  display: block !important;
  position: relative;
`;
const RemoveBtn = styled(Icon)`
  padding: 0 5px;
  svg {
    width: 20px;
    position: relative;
    top: -2px;
  }
  cursor: pointer;
`;

export const LoaderContainer = styled.div`
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoMathContent = styled(NoMatch)`
  height: 100%;
`;
CartItem.Name = CartItemName;
CartItem.Price = CartItemPrice;
CartItem.Input = CartItemInput;
CartItem.Btn = RemoveBtn;
CartItem.Label = CartItemLabel;
