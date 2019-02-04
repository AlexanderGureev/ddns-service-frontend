import React from "react";
import { ReactComponent as IconOne } from "./img/icon-1.svg";
import { ReactComponent as IconTwo } from "./img/icon-2.svg";
import { ReactComponent as IconThree } from "./img/icon-3.svg";
import { Row, Col, ContentCard } from "./styles";

const contentCard = [
  {
    icon: IconOne,
    title: "Faster Loading Speed",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
  },
  {
    icon: IconTwo,
    title: "Greatest Uptime",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
  },
  {
    icon: IconThree,
    title: "Dedicated Support",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
  }
];

const ChooseCard = () => (
  <Row gutter={32} type="flex" justify="center">
    {contentCard.map(({ icon: Icon, title, text }, i) => (
      <Col xs={{ span: 15 }} md={{ span: 10 }} lg={{ span: 7 }} key={i}>
        <ContentCard>
          <ContentCard.ImgWrapper>{<Icon />}</ContentCard.ImgWrapper>
          <ContentCard.Title>{title}</ContentCard.Title>
          <ContentCard.Text>{text}</ContentCard.Text>
        </ContentCard>
      </Col>
    ))}
  </Row>
);

export default ChooseCard;
