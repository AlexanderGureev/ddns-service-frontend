import React from "react";
import { FooterTopWrapper, FooterCircleLayer } from "./styles";
import footerImg from "./img/footer-bg-1.svg";
import ShortRegForm from "./ShortRegForm";

const FooterTop = () => (
  <FooterTopWrapper src={footerImg}>
    <FooterCircleLayer />
    <ShortRegForm />
  </FooterTopWrapper>
);

export default FooterTop;
