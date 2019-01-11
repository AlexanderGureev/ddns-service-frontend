import React from "react";
import Description from "./Description";
import contentImg from "./img/content-bg.png";
import { ParallaxLayer } from "react-spring/addons";
import { ContentWrapper } from "./styles";


const Content = () => {
  return (
    <ParallaxLayer offset={1}>
      <ContentWrapper src={contentImg}>
        <Description />
      </ContentWrapper>
    </ParallaxLayer>
  );
};

export default Content;
