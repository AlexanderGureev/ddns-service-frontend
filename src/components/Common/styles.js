import { Link } from "react-router-dom";
import { Button as AntdButton } from "antd";
import styled, { keyframes } from "styled-components";
import loadingBg from "./img/loading-page.svg";

export const PreloaderContainer = styled.div`
  position: absolute;
  font-weight: 700;
  font-size: 50px;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background: url(${loadingBg}) no-repeat center center;
  background-size: cover;
  min-width: 200px;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 560px) {
    font-size: 23px;
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 40px;
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 890px) {
    font-size: 23px;
  }
  @media (max-width: 560px) {
    letter-spacing: 2px;
    font-size: 14px;
  }
`;
export const StatusCode = styled(Text)`
  font-size: 120px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 100px;
  }
  @media (max-width: 890px) {
    font-size: 80px;
  }
  @media (max-width: 560px) {
    font-size: 60px;
  }
`;

export const StyledCode = styled.code`
  color: #5367c3;
  padding: 0 10px;
`;

export const HomeLink = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  text-transform: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  transition: 0.3s ease;

  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

const showLoadingCircle = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const Button = styled(AntdButton)`
  && {
    background: linear-gradient(140deg, #0d52df, #562685);
    border-radius: 10px;
    filter: drop-shadow(0px 10px 10px rgba(13, 82, 223, 0.25));
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 800;
    padding: 10px 60px;
    outline: none;

    &.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only) {
      padding: 10px 60px;
    }
    span {
      transition: 0.5s ease;
    }

    i {
      animation: ${showLoadingCircle} 0.5s ease;
    }
    &:hover {
      background: linear-gradient(140deg, #0d52df, #562685);
      color: #fff;
    }
    &:focus {
      background: linear-gradient(140deg, #0d52df, #562685);
      color: #fff;
    }
    &:disabled {
      background: rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 560px) {
      font-size: 14px;
      padding: 10px 40px;
    }
    @media (max-width: 360px) {
      font-size: 12px;
      padding: 10px 20px;
    }
  }
`;
