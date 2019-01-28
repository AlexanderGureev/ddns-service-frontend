import styled from "styled-components";
import { Link } from "react-router-dom";
import loadingBg from "./img/loading-page.svg";

export const PreloaderContainer = styled.div`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 50px;
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background: url(${loadingBg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 560px) {
    font-size: 23px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 40px;
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;
export const StatusCode = styled(Text)`
  font-size: 120px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 100px;
  }
  @media (max-width: 560px) {
    font-size: 80px;
  }
`;

export const StyledCode = styled.code`
  color: #5367c3;
  padding: 0 10px;
`;

export const HomeLink = styled(Link)`
  font-family: "Montserrat";
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
