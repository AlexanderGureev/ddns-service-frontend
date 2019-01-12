import React from "react";
import { StyledParallaxLayer } from "./styles";
import { Row, Col } from "antd";
import footerImg from "./img/footer-bg-3.svg";
import miniLogo from "./img/mini-logo.svg";
import { MiniLogo, Copyright } from "./styles";
import { useMedia } from "react-use";

const FooterMid = () => {
  let isLarge = useMedia("(min-width: 1200px)");
  let isSmall = useMedia("(min-width: 760px)");

  return (
    <StyledParallaxLayer src={footerImg} order={0} offset={2.9} speed={0.1}>
      <StyledParallaxLayer offset={isSmall ? .37 : .4} speed={0.1}>
        <Row type="flex" justify="center" align="middle">
          <Col offset={0}>
            { isSmall && <Copyright>
              ©2018-2019. fsr-ddns.com. All Rights Reserved.
            </Copyright> }
          </Col>
          <Col offset={isLarge ? 5 : 0}>
            <MiniLogo>
              <MiniLogo.Logo src={miniLogo} />
              <MiniLogo.Text>Fsr-ddns</MiniLogo.Text>
            </MiniLogo>
          </Col>
        </Row>
      </StyledParallaxLayer>
    </StyledParallaxLayer>
  );
};

export default FooterMid;
