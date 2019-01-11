import React from "react";
import { Row, Col } from "antd";
import { ParallaxLayer } from "react-spring/addons";
import secureIcon from "./img/secure-icon.svg";
import funIcon from "./img/fun-icon.svg";
import aboutIcon from "./img/about-icon.svg";
import ContentColumn from "./Column";

const Description = () => {
  return (
    <ParallaxLayer offset={0.25} speed={0.1}>
      <Row type="flex" justify="center">
        <Col span={5}>
          <ContentColumn>
            <ContentColumn.Image src={secureIcon} />
            <ContentColumn.Head>Stay Safe</ContentColumn.Head>
            <ContentColumn.Text>
              Make sure the people, pets and places that you love stay safe.
            </ContentColumn.Text>
            <ContentColumn.LinkMore>Learn More</ContentColumn.LinkMore>
          </ContentColumn>
        </Col>

        <Col span={5} offset={2}>
          <ContentColumn>
            <ContentColumn.Image src={funIcon} />
            <ContentColumn.Head>Have Fun</ContentColumn.Head>
            <ContentColumn.Text>
              Run a game server and allow friends to connect from across the
              globe.
            </ContentColumn.Text>
            <ContentColumn.LinkMore>Learn More</ContentColumn.LinkMore>
          </ContentColumn>
        </Col>

        <Col span={5} offset={2}>
          <ContentColumn>
            <ContentColumn.Image src={aboutIcon} />
            <ContentColumn.Head>Forget About It</ContentColumn.Head>
            <ContentColumn.Text>
              Simply point your IP to an easy to remember hostname.
            </ContentColumn.Text>
            <ContentColumn.LinkMore>Learn More</ContentColumn.LinkMore>
          </ContentColumn>
        </Col>
      </Row>
    </ParallaxLayer>
  );
};

export default Description;
