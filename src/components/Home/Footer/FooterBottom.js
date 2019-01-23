import React from "react";
import { Row, Col } from "antd";
import { useMedia } from "react-use";
import { MiniLogo, Copyright, FooterBottomContainer } from "./styles";

const FooterMid = () => {
  const isLarge = useMedia("(min-width: 1200px)");
  const isSmall = useMedia("(min-width: 760px)");

  return (
    <FooterBottomContainer>
      <Row type="flex" justify="center" align="middle">
        <Col offset={0}>
          {isSmall && (
            <Copyright>
              ©2018-2019. fsr-ddns.com. All Rights Reserved.
            </Copyright>
          )}
        </Col>
        <Col offset={isLarge ? 5 : 1}>
          <MiniLogo />
        </Col>
      </Row>
    </FooterBottomContainer>
  );
};

export default FooterMid;
