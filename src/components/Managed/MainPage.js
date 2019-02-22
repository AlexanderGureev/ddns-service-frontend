import React from "react";
import {
  Row,
  Col,
  Content as StyledContent,
  Card as StyledCard
} from "./styles";

import { Card, BigCard } from "./Card";
import Tabs from "./Tabs";

const MainPage = props => (
  <StyledContent.Wrapper>
    <Row gutter={16}>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <Card
          colorA="#586CC4"
          colorB="#7343C7"
          title="0"
          text="Active"
          smallText="hostnames"
        />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <Card
          colorA="#3E2BA7"
          colorB="#4E8BBC"
          title="0"
          text="Active"
          smallText="updates detected"
        />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <Card
          colorA="#2B8FA7"
          colorB="#0585EB"
          title="0"
          text="Registered"
          smallText="domains"
        />
      </Col>
    </Row>

    <Row gutter={32}>
      <Col xs={{ span: 24 }} lg={{ span: 16 }}>
        <Tabs />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <BigCard colorA="#2B8FA7" colorB="#0585EB" title="Account Overview">
          <StyledCard.Content center gutter>
            <StyledCard.Content.SmallText>
              Last Login IP
            </StyledCard.Content.SmallText>
            <StyledCard.Content.Text>95.165.136.7</StyledCard.Content.Text>
          </StyledCard.Content>

          <StyledCard.Content center gutter>
            <StyledCard.Content.SmallText>
              Last Login
            </StyledCard.Content.SmallText>
            <StyledCard.Content.Text>
              Jan 2, 2019 16:31:38 PST
            </StyledCard.Content.Text>
          </StyledCard.Content>
        </BigCard>
      </Col>
    </Row>
  </StyledContent.Wrapper>
);

export default MainPage;
