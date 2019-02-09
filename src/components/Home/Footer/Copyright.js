import React from "react";
import { Copyright } from "./styles";
// import { ReactComponent as FooterLogo } from "./img/white-logo.svg";
import { ReactComponent as FooterLogo } from "./img/footer-logo.svg";

const FooterCopyright = () => (
  <Copyright>
    <Copyright.Row type="flex" justify="center">
      <Copyright.Col
        xs={{ span: 21, order: 1 }}
        sm={{ span: 10, offset: 2, order: 0 }}
        lg={{ span: 14, offset: 1, order: 0 }}
      >
        <Copyright.Text>
          @ copyright 2019, best-service.online. All right reserved.
        </Copyright.Text>
      </Copyright.Col>

      <Copyright.Col
        xs={{ span: 23, order: 0 }}
        sm={{ span: 5, offset: 1, order: 1 }}
        lg={{ span: 4, offset: 1, order: 1 }}
      >
        <Copyright.LogoWrapper>
          <FooterLogo />
        </Copyright.LogoWrapper>
      </Copyright.Col>
    </Copyright.Row>
  </Copyright>
);

export default FooterCopyright;
