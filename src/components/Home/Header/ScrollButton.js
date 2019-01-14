import React from "react";
import { ScrollBtn } from "./styles";
import { goToAnchor, configureAnchors, goToTop } from "react-scrollable-anchor";
import arrowImg from "./img/arrow.svg";
import { useMedia } from "react-use";

const ScrollButton = (props) => {
  const { bottom, anchor } = props;
  let isSmall = useMedia("(max-width: 900px)");
  configureAnchors({offset: isSmall ? 400 : 210, scrollDuration: 800});

  return <ScrollBtn bottom={bottom} src={arrowImg} onClick={() => bottom ? goToTop() : goToAnchor(anchor)} />;
};

export default ScrollButton;
