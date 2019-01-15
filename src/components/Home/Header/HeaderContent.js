import React from "react";
import { useMedia } from "react-use";
import logoHeader from "./img/header-logo.svg";
import logoHeaderWhite from "./img/header-logo-white.svg";
import {
  ContentWrapper,
  HeaderContentText,
  HeaderButton,
  Logo
} from "./styles";

const HeaderContent = () => {
  const isSmall = useMedia("(max-width: 900px)");

  return (
    <ContentWrapper>
      <Logo src={isSmall ? logoHeaderWhite : logoHeader} />
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
