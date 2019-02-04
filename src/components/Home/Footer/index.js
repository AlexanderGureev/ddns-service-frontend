import React from "react";
import footerBg from "./img/footer-bg.svg";
import FooterBackgroundCircles from "./FooterBackgroundCircles";
import { FooterWrapper, FooterBottom, FooterTop } from "./styles";
import FooterCards from "./FooterCards";
import Copyright from "./Copyright";
import StayUpdatedForm from "./StayUpdatedForm";
import CreateHostnameForm from "./CreateHostnameForm";

const Footer = props => (
  <FooterWrapper id="shortForm">
    <FooterTop>
      <FooterBackgroundCircles />
      <CreateHostnameForm />
    </FooterTop>
    <FooterBottom src={footerBg}>
      <StayUpdatedForm />
      <FooterCards />
      <Copyright />
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;
