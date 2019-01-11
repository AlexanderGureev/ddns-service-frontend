import React from "react";
import {StyledParallaxLayer} from "./styles";
import footerImg from "./img/footer-bg-2.svg";

const FooterMid = () => {
  return <StyledParallaxLayer src={footerImg} order={0} offset={2.25} speed={.07}/>
}

export default FooterMid;