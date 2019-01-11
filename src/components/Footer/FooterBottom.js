import React from "react";
import {StyledParallaxLayer} from "./styles";
import footerImg from "./img/footer-bg-3.svg";

const FooterMid = () => {
  return <StyledParallaxLayer src={footerImg} order={0} offset={2.7} speed={.1}/>
}

export default FooterMid;