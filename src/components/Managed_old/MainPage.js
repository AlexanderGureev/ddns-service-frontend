import React from "react";
import { Row, Col } from "antd";
import { Main, InfoBlock } from "./styles";
import ActiveHostnames from "./ActiveHostnames";
import UpdatedHostnames from "./UpdatedHostnames";
import AccountOverview from "./AccountOverview";

const MainPage = props => (
  <Main>
    <Row type="flex">
      <Col lg={{ span: 24 }} xl={{ span: 16 }}>
        <Col lg={{ span: 11 }} xl={{ span: 10 }}>
          <ActiveHostnames />
        </Col>
        <Col lg={{ span: 11, offset: 1 }} xl={{ span: 10, offset: 2 }}>
          <UpdatedHostnames />
        </Col>

        <Col lg={{ span: 23 }} xl={{ span: 22 }}>
          <InfoBlock>
            <InfoBlock.Title>Title</InfoBlock.Title>
            <InfoBlock.Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </InfoBlock.Text>
          </InfoBlock>
        </Col>
      </Col>

      <Col span={24} lg={{ span: 23 }} xl={{ span: 8 }}>
        <AccountOverview />
      </Col>
    </Row>
  </Main>
);

export default MainPage;
