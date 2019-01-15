import React from "react";
import FooterTop from "./FooterTop";
import FooterMid from "./FooterMid";
import FooterBottom from "./FooterBottom";
import { FooterContainer } from "./styles";

const Footer = props => (
  <FooterContainer>
    <FooterTop />
    <FooterMid />
    <FooterBottom />
  </FooterContainer>
);

export default Footer;
