import React from "react";
import { StyledParallaxLayer } from "./styles";
import { Row, Col } from "antd";
import footerImg from "./img/footer-bg-2.svg";
import { ContentColumn } from "./styles";
import SocialBar from "./SocialBar";
import { useMedia } from "react-use";

const textColumns = [
  {
    head: "Services",
    list: [
      "Dynamic DNS",
      "Managed DNS",
      "Managed Access",
      "Email",
      "Domain Registration",
      "Server Monitoring",
      "SSL Certificates"
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

const renderList = countColumn => {
  return textColumns.map(
    ({ head, list }, index) =>
      (index < countColumn) && (
        <Col
          xs={{ span: 9, offset: 3 }}
          sm={{ span: 5, offset: 3 }}
          xl={{ span: 4, offset: 1 }}
          key={index}
        >
          <ContentColumn>
            <ContentColumn.Head>{head}</ContentColumn.Head>
            <ContentColumn.List>
              {list.map((item, index) => (
                <ContentColumn.ListItem key={index}>
                  {item}
                </ContentColumn.ListItem>
              ))}
            </ContentColumn.List>
            {index === 3 && <SocialBar />}
          </ContentColumn>
        </Col>
      )
  );
};

const FooterMid = () => {
  let isLarge = useMedia("(max-width: 1200px)");
  let isSmall = useMedia("(max-width: 600px)");

  console.log(isSmall);
  return (
    <StyledParallaxLayer src={footerImg} order={0} offset={2.25} speed={0.07}>
      <StyledParallaxLayer offset={0.32} speed={0}>
        <Row type="flex" justify="center">
          {isSmall
            ? renderList(textColumns.length - 2)
            : isLarge
            ? renderList(textColumns.length - 1)
            : renderList(textColumns.length)}
        </Row>
      </StyledParallaxLayer>
    </StyledParallaxLayer>
  );
};

export default FooterMid;
