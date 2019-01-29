import React, { useState } from "react";
import { useMedia } from "react-use";
import { useSpring } from "react-spring/hooks";
import { ReactComponent as LogoHeader } from "./img/header-logo.svg";
import { ReactComponent as LogoHeaderWhite } from "./img/header-logo-white.svg";
import {
  ContentWrapper,
  HeaderContentText,
  HeaderButton,
  getStyledLogo
} from "./styles";

const HeaderContent = () => {
  const [hover, setHover] = useState(false);
  const props = useSpring({
    background: hover
      ? "linear-gradient(160deg, #1194e8, #0067FF)"
      : "linear-gradient(140deg, #1194e8, #75acfd)"
  });
  const isSmall = useMedia("(max-width: 900px)");

  const Logo = isSmall
    ? getStyledLogo(LogoHeaderWhite)
    : getStyledLogo(LogoHeader);

  const onMouseOver = e => setHover(true);
  const onMouseLeave = e => setHover(false);

  return (
    <ContentWrapper>
      <Logo />
      <HeaderContentText>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less.
      </HeaderContentText>

      <HeaderButton
        style={props}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        Get started
      </HeaderButton>
    </ContentWrapper>
  );
};

export default HeaderContent;
