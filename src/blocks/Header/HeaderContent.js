import React from "react";
import styled from "styled-components";
import logoHeader from "./img/header-logo.svg";

const ContentWrapper = styled.div`
  position: absolute;
  width: 700px;
  top: 130px;
`;
const Logo = styled.img.attrs(({ src }) => ({ src }))`
  width: 640px;
  height: auto;
  filter: drop-shadow(5px 35px 15px rgba(0,0,0, .05));
`;
const HeaderContentText = styled.div`
  font-size: 18px;
  font-family: "Montserrat";
  color: #707070;
  padding: 30px 0;
`;
const HeaderButton = styled.button`
  background: linear-gradient(140deg,rgba(17,148,232),rgb(120, 170, 245));
  color: white;
  text-transform: uppercase;
  padding: 13px 60px;
  filter: drop-shadow(5px 10px 25px rgba(0,0,0, .25));
  cursor: pointer;
  border:none;
  border-radius: 30px;
  font-size: 20px;
  font-family: "Montserrat";
  font-weight: 600;
`;


const HeaderContent = () => {
  return (
    <ContentWrapper>
      <Logo src={logoHeader} />
      <HeaderContentText>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less.
      </HeaderContentText>
      <HeaderButton>Get started</HeaderButton>
    </ContentWrapper>
  );
};

export default HeaderContent;
