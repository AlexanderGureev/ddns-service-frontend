import styled from "styled-components";
import { Select as AntdSelect, Input as AntdInput } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as FooterCircles } from "./img/footer-bg-circles.svg";
import { ReactComponent as MiniLogoIcon } from "../Header/img/header-logo-white.svg";

export const FooterCircleLayer = styled(FooterCircles)`
  width: 100%;
  position: relative;
  top: 200px;
`;
export const FooterContainer = styled.div`
  position: relative;
`;

export const FooterTopWrapper = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 100%;
  position: absolute;
  top: -460px;
  height: 1060px;
  display: flex;
  justify-content: center;
`;
export const FooterMidWrapper = styled(FooterTopWrapper)`
  display: block;
  top: 600px;
  height: 680px;
`;

export const FooterMidContainer = styled.div`
  display: block;
  position: relative;
`;

export const FooterBottomContainer = styled.div`
  position: relative;
  top: 1150px;
`;

export const ShortForm = styled.form`
  display: flex;
  align-items: center;
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ant-row {
    margin-right: 20px !important;
    width: 300px !important;

    @media (max-width: 870px) {
      margin-right: 0px !important;
    }
    @media (max-width: 470px) {
      width: 250px !important;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 450px;
`;

export const HeaderForm = styled.p`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  color: #fff;

  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 870px) {
    font-size: 30px;
  }

  @media (max-width: 470px) {
    font-size: 25px;
    text-align: center;
    padding: 0 20px;
  }
`;

export const Input = styled(AntdInput)`
  border: none;
  color: #8f8f8f;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.35));
  font-size: 16px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 12px 30px;
  margin-right: 20px;
  outline: none;
  transition: none;

  @media (max-width: 870px) {
    margin: 0 0 20px 0;
  }
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;
export const Select = styled(AntdSelect)`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  color: #8f8f8f;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.35));
  .ant-select-selection {
    border-radius: 10px;
    border: none;
    padding: 12px 30px !important;
    transition: none;
  }
  .ant-select-selection--single {
    height: auto !important;
  }
  .ant-select-selection__rendered {
    line-height: 25px !important ;
    margin: 0;
  }

  @media (max-width: 470px) {
    font-size: 14px;
  }
`;
export const ButtonLink = styled(Link)`
  background: linear-gradient(140deg, #2c3ff9, #3673f1);
  border-radius: 10px;
  filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.35));
  color: #fff;
  border: none;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 800;
  padding: 12px 70px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;

  &:hover {
    color: white;
  }

  @media (max-width: 1200px) {
    padding: 12px 40px;
  }

  @media (max-width: 870px) {
    width: 100%;
    margin: 20px 0;
  }
  @media (max-width: 470px) {
    font-size: 16px;
  }
`;

export const ContentColumn = styled.div``;

const Head = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 20px 0;
  color: #fff;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 870px) {
    font-size: 20px;
  }
  @media (max-width: 470px) {
    margin: 15px 0;
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: #2868d7;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 870px) {
    font-size: 16px;
  }
  @media (max-width: 870px) {
    font-size: 14px;
  }
`;

ContentColumn.Head = Head;
ContentColumn.List = List;
ContentColumn.ListItem = Item;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SocialBarIcon = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-left: -5px;
  cursor: pointer;

  @media (max-width: 960px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 780px) {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  @media (max-width: 470px) {
    width: 30px;
    height: 30px;
  }
`;

SocialContainer.Icon = SocialBarIcon;

export const MiniLogo = styled(MiniLogoIcon)`
  height: 120px;
  width: 300px;

  @media (max-width: 760px) {
    height: 100px;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 14px;
  }
`;
