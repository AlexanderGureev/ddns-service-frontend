import React from "react";
import styled from "styled-components";
import Description from "./Description";
import contentImg from "./img/content-bg.png";

const ContentWrapper = styled.div`
  background: url(${ props =>props.src}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 900px;
`;

const Content = () =>{
  return (
    <ContentWrapper src={contentImg}>
      <Description />
    </ContentWrapper>
  )
}

export default Content;