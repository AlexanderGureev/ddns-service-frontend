import React from "react";
import { goToAnchor, configureAnchors, goToTop } from "react-scrollable-anchor";
import { useMedia } from "react-use";
import { ScrollBtn } from "./styles";
import arrowImg from "./img/arrow.svg";

const ScrollButton = props => {
  const { bottom, anchor } = props;
  const isSmall = useMedia("(max-width: 900px)");
  configureAnchors({ offset: isSmall ? 400 : 210, scrollDuration: 800 });

  return (
    <ScrollBtn
      bottom={bottom}
      src={arrowImg}
      onClick={() => (bottom ? goToTop() : goToAnchor(anchor))}
    />
  );
};

export default ScrollButton;
