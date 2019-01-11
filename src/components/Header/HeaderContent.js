import React from "react";
import logoHeader from "./img/header-logo.svg";
import { ContentWrapper, HeaderContentText, HeaderButton, Logo } from "./styles";

const HeaderContent = () => {
  return (
    <ContentWrapper>
      <Logo src={logoHeader} />
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
