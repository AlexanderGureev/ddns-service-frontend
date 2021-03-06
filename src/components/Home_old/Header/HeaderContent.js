import React from "react";
import { useMedia } from "react-use";
import { ReactComponent as LogoHeader } from "./img/header-logo.svg";
import { ReactComponent as LogoHeaderWhite } from "./img/header-logo-white.svg";
import {
  ContentWrapper,
  HeaderContentText,
  HeaderButton,
  getStyledLogo
} from "./styles";

const HeaderContent = () => {
  const isSmall = useMedia("(max-width: 900px)");

  const Logo = isSmall
    ? getStyledLogo(LogoHeaderWhite)
    : getStyledLogo(LogoHeader);

  return (
    <ContentWrapper>
      <Logo />
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
