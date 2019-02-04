import React from "react";

import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import Menu from "./Menu";
import { HeaderWrapper, CircleBackground } from "./styles";

const Header = () => (
  <HeaderWrapper>
    {/* <CircleBackground /> */}
    <Menu />
    <LeftPart />
    <RightPart />
  </HeaderWrapper>
);
export default Header;
