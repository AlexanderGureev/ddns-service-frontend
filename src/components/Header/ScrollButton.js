import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { ScrollBtn } from "./styles";
import arrowImg from "./img/arrow.svg";

const ScrollButton = () => {
  const { parallaxLayer } = useContext(AppContext);

  return (
    <ScrollBtn src={arrowImg} onClick={ () => parallaxLayer.current.scrollTo(1.7)}/>
  )
}

export default ScrollButton;