import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { ParallaxLayer } from "react-spring/addons";
import { HeaderWrapper } from "./styles";
import ScrollButton from "./ScrollButton";

const Header = () => {
  return (
    <ParallaxLayer offset={0}>
      <HeaderWrapper>
        <LeftPart />
        <RightPart />
        <ScrollButton />
      </HeaderWrapper>
    </ParallaxLayer>
  );
};

export default Header;
