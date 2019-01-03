import React from "react";
import styled from "styled-components";
import headerImg from "./img/header-bg.svg";

const HeaderImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  z-index: -1;
`;

const RightPart = () => {
  return <HeaderImg src={headerImg}/>
};

export default RightPart;
