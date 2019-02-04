import React from "react";
import headerBg from "./img/header-bg.svg";
import downArrowIcon from "./img/down-arrow.svg";
import BurgerMenu from "./BurgerMenu";
import TopMenu from "./TopMenu";
import {
  HeaderWrapper,
  TopLine,
  Logo,
  HeaderContent,
  ScrollBtn
} from "./styles";

const Header = props => (
  <HeaderWrapper src={headerBg}>
    <TopLine>
      <BurgerMenu />
      <Logo>
        <Logo.Icon />
        <Logo.Link to="/" />
      </Logo>
      <TopMenu />
    </TopLine>
    <HeaderContent>
      <HeaderContent.Title>
        Dynamic IP address got you down?
      </HeaderContent.Title>
      <HeaderContent.Caption>
        Create an easy to remember hostname and never lose your connection
        again.
      </HeaderContent.Caption>
      <HeaderContent.Button to="/login">Get started</HeaderContent.Button>
    </HeaderContent>
    <ScrollBtn>
      <ScrollBtn.Link href="#shortForm" />
      <ScrollBtn.Icon src={downArrowIcon} />
    </ScrollBtn>
  </HeaderWrapper>
);

export default Header;
