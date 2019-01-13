import React from "react";
import { FooterTopWrapper } from "./styles";
import footerImg from "./img/footer-bg-1.svg";
import ShortRegForm from "./ShortRegForm";
import ScrollableAnchor from "react-scrollable-anchor";

const FooterTop = () => {
  return (
    <ScrollableAnchor id={"formSection"}>
      <FooterTopWrapper src={footerImg}>
        <ShortRegForm />
      </FooterTopWrapper>
    </ScrollableAnchor>
  );
};

export default FooterTop;
