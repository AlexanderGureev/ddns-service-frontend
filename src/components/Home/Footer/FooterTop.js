import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { FooterTopWrapper, FooterCircleLayer } from "./styles";
import footerImg from "./img/footer-bg-1.svg";
import ShortRegForm from "./ShortRegForm";

const FooterTop = () => (
  <ScrollableAnchor id="formSection">
    <FooterTopWrapper src={footerImg}>
      <FooterCircleLayer />
      <ShortRegForm />
    </FooterTopWrapper>
  </ScrollableAnchor>
);

export default FooterTop;
