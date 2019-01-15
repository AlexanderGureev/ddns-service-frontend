import React from "react";
import Description from "./Description";
import contentImg from "./img/content-bg.png";
import { ContentWrapper } from "./styles";

const Content = () => (
  <ContentWrapper src={contentImg}>
    <Description />
  </ContentWrapper>
);

export default Content;
