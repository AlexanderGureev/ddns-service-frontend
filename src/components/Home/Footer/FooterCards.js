import React from "react";
import SocialBar from "./SocialBar";
import { FooterRow, Col } from "./styles";

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

const FooterCards = () => (
  <FooterRow gutter={16} type="flex" justify="center">
    {textColumns.map(({ head, list }, index) => (
      <Col
        xs={{ span: 10, offset: 2 }}
        sm={{ span: 7, offset: index === 0 || 2 ? 3 : 0 }}
        lg={{ span: 5, offset: index === 0 ? 2 : 0 }}
        key={index}
      >
        <FooterRow.Col>
          <FooterRow.Col.Head>{head}</FooterRow.Col.Head>
          <FooterRow.Col.List>
            {list.map((item, i) => (
              <FooterRow.Col.ListItem key={i}>{item}</FooterRow.Col.ListItem>
            ))}
          </FooterRow.Col.List>
        </FooterRow.Col>
        {index === 3 && <SocialBar />}
      </Col>
    ))}
  </FooterRow>
);

export default FooterCards;
