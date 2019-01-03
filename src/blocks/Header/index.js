import React from "react";
import styled from "styled-components";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Header = styled.div`
  min-height:700px;
  height: 100vh;
`;

Header.LeftPart = LeftPart;
Header.RightPart = RightPart;

export default Header;