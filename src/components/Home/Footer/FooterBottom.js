import React from "react";
import { Row, Col } from "antd";
import { useMedia } from "react-use";
import miniLogo from "./img/mini-logo.svg";
import { MiniLogo, Copyright, FooterBottomContainer } from "./styles";
import ScrollButton from "../Header/ScrollButton";

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
          <MiniLogo>
            <MiniLogo.Logo src={miniLogo} />
            <MiniLogo.Text>Fsr-ddns</MiniLogo.Text>
          </MiniLogo>
        </Col>
      </Row>
      <ScrollButton bottom />
    </FooterBottomContainer>
  );
};

export default FooterMid;
