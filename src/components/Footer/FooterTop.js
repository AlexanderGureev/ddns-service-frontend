import React from "react";
import { StyledParallaxLayer } from "./styles";
import footerImg from "./img/footer-bg-1.svg";
import CirclesLayer from "./CirclesLayer";
import ShortRegForm from "./ShortRegForm";

const FooterTop = () => {
  return (
    <>
      <StyledParallaxLayer src={footerImg} order={0} offset={1.6} speed={0.05}>
        <ShortRegForm />
      </StyledParallaxLayer>
      <CirclesLayer />
    </>
  );
};

export default FooterTop;
