import styled from "styled-components";
import { Drawer } from "antd";
import React from "react";
import { ReactComponent as MenuBg } from "./img/menu-bg.svg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  position: relative;
`;

export const HeaderImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat left center;
  background-size: cover;
  z-index: -1;
  min-height: 860px;

  @media (max-width: 900px) {
    background-position: right center;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;
`;

const Background = styled(MenuBg)`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
`;

const CollapseMenu = styled(Drawer)`
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
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const CollapseMenuWrapper = props => (
  <CollapseMenu {...props}>
    <Background />
    {props.children}
  </CollapseMenu>
);

export const TopMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 80px;

  @media (max-width: 1300px) {
    margin-right: 40px;
  }
`;
const TopMenuItem = styled.p`
  a {
    display: block;
    padding: 5px 20px;
    color: #fff;
    &:hover {
      color: ${props =>
        props.btn ? "rgba(0,0,0, .9)" : "rgba(255,255,255, .3)"};
    }

    @media (max-width: 1300px) {
      padding: 5px 10px;
    }
  }
  position: relative;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
  cursor: pointer;
  margin: 0;
  margin-right: 10px;
  border-radius: 30px;
  background: ${props => (props.btn ? "rgba(17, 2, 148, 0.3)" : "none")};
  transition: 0.3s ease;

  &:hover {
    background: ${props => (props.btn ? "rgba(255, 255, 255, 0.3)" : "none")};
  }

  @media (max-width: 1600px) {
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
TopMenu.Item = TopMenuItem;

export const MenuBtn = styled.img.attrs(({ src }) => ({ src }))`
  width: 35px;
  height: auto;
  margin: 30px 0 30px 100px;

  @media (max-width: 900px) {
    margin: 30px 0 30px 70px;
  }
`;

export const LeftPartWrapper = styled.div`
  position: absolute;
  width: 580px;
  height: 60%;
  top: 40px;
  left: 100px;

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 130px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Logo = styled.img.attrs(({ src }) => ({ src }))`
  width: 640px;
  height: auto;
  filter: drop-shadow(5px 35px 15px rgba(0, 0, 0, 0.05));

  @media (max-width: 1800px) {
    width: 540px;
  }
  @media (max-width: 900px) {
    width: 460px;
  }
  @media (max-width: 760px) {
    width: 360px;
  }
  @media (max-width: 560px) {
    width: 260px;
  }
`;

export const getStyledLogo = Component => styled(Component)`
  width: 640px;
  height: auto;
  filter: drop-shadow(5px 35px 15px rgba(0, 0, 0, 0.05));

  @media (max-width: 1800px) {
    width: 540px;
  }
  @media (max-width: 900px) {
    width: 460px;
  }
  @media (max-width: 760px) {
    width: 360px;
  }
  @media (max-width: 560px) {
    width: 260px;
  }
`;
export const HeaderContentText = styled.div`
  font-size: 18px;
  font-family: "Montserrat";
  color: #707070;
  padding: 20px 0 30px 0;

  @media (max-width: 1800px) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
    color: #fff;
    font-weight: 400px;
    width: 70%;
    text-align: center;
  }
`;

export const HeaderButton = styled.button`
  background: linear-gradient(140deg, #1194e8, #75acfd);
  color: white;
  text-transform: uppercase;
  padding: 13px 60px;
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;
  transition: 0.3s ease;
  outline: none;

  @media (max-width: 760px) {
    padding: 10px 40px;
    font-size: 18px;
  }
  @media (max-width: 570px) {
    padding: 10px 30px;
    font-size: 16px;
  }
`;

export const ScrollBtn = styled.div`
  position: absolute;
  bottom: ${props => (props.bottom ? "80px" : "20px")};
  left: 48.5%;
  border-radius: 50%;
  background: linear-gradient(180deg, #2c3d89, #3b51b2);
  filter: drop-shadow(5px 10px 25px rgba(0, 0, 0, 0.35));
  cursor: pointer;
  width: 60px;
  height: 60px;
  &::before {
    content: "";
    background: url(${props => props.src}) no-repeat center center;
    background-size: contain;
    display: block;
    width: 40px;
    height: 40px;
    left: 10px;
    top: 10px;
    position: absolute;
    transform: rotate(${props => (props.bottom ? "180deg" : 0)});
    @media (max-width: 1200px) {
      width: 30px;
      height: 30px;
      left: 10px;
      top: 10px;
    }
  }
  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 900px) {
    left: 47%;
  }
  @media (max-width: 570px) {
    left: 45%;
  }
`;
