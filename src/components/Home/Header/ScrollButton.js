import React from "react";
import { ScrollBtn } from "./styles";
import { goToAnchor, configureAnchors } from "react-scrollable-anchor";
import arrowImg from "./img/arrow.svg";
import { useMedia } from "react-use";

const ScrollButton = () => {
  let isSmall = useMedia("(max-width: 900px)");
  configureAnchors({offset: isSmall ? 400 : 210, scrollDuration: 800});

  return <ScrollBtn src={arrowImg} onClick={() => goToAnchor("formSection")} />;
};

export default ScrollButton;
