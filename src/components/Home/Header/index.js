import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Menu from "./Menu";
import { HeaderWrapper } from "./styles";
import ScrollButton from "./ScrollButton";

const Header = () => (
  <HeaderWrapper>
    <Menu />
    <LeftPart />
    <RightPart />
    <ScrollButton anchor="formSection" />
  </HeaderWrapper>
);

export default Header;
