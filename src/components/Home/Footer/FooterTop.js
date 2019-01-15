import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { FooterTopWrapper } from "./styles";
import footerImg from "./img/footer-bg-1.svg";
import ShortRegForm from "./ShortRegForm";

const FooterTop = () => (
  <ScrollableAnchor id="formSection">
    <FooterTopWrapper src={footerImg}>
      <ShortRegForm />
    </FooterTopWrapper>
  </ScrollableAnchor>
);

export default FooterTop;
