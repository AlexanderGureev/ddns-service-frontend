import React from "react";
import { Row, Col } from "antd";
import { uniqueId } from "lodash";
import footerImg from "./img/footer-bg-2.svg";
import { ContentColumn, FooterMidContainer, FooterMidWrapper } from "./styles";
import SocialBar from "./SocialBar";

const textColumns = [
  {
    head: "Services",
    list: [
      "Dynamic DNS",
      "Managed DNS",
      "Managed Access",
      "Email",
      "Domain Registration"
    ]
  },
  {
    head: "Support",
    list: ["Knowledgebase", "Getting Started", "FAQ", "Port Check", "Downloads"]
  },
  {
    head: "Company",
    list: [
      "About Services",
      "What is DNS/DDNS",
      "Integrate",
      "Careers",
      "Contact us"
    ]
  },
  {
    head: "Stay connected",
    list: ["Blog Posts & News", "Press & Media"]
  }
];

const FooterMid = () => (
  <FooterMidWrapper src={footerImg}>
    <FooterMidContainer>
      <Row type="flex" justify="center">
        {textColumns.map(({ head, list }, index) => (
          <Col
            xs={{ span: 8, offset: 1 }}
            sm={{ span: 5, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            key={uniqueId()}
          >
            <ContentColumn>
              <ContentColumn.Head>{head}</ContentColumn.Head>
              <ContentColumn.List>
                {list.map(item => (
                  <ContentColumn.ListItem key={uniqueId()}>
                    {item}
                  </ContentColumn.ListItem>
                ))}
              </ContentColumn.List>
              {index === 3 && <SocialBar />}
            </ContentColumn>
          </Col>
        ))}
      </Row>
    </FooterMidContainer>
  </FooterMidWrapper>
);

export default FooterMid;
