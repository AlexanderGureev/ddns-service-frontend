import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import secureIcon from "./img/secure-icon.svg";
import funIcon from "./img/fun-icon.svg";
import aboutIcon from "./img/about-icon.svg";

const Head = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 20px 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

const LinkMore = styled.a`
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0;
  display: block;
  color: white;
`;

const Image = styled.img.attrs(({ src }) =>({ src}))`
  width: 220px;
  height: 220px;
`;

const Column = ({ className, icon, children }) => {
  return (
    <div className={className}>
      <ContentColumn.Image src={icon} />
      {children}
      <ContentColumn.LinkMore>Learn More</ContentColumn.LinkMore>
    </div>
  );
};

const ContentColumn = styled(Column)`
  text-align: center;
  color: white;
  font-family: "Montserrat";
`;

const StyledRow = styled(Row)`
  padding-top:200px;
`;

ContentColumn.Head = Head;
ContentColumn.Text = Text;
ContentColumn.LinkMore = LinkMore;
ContentColumn.Image = Image;

const Description = () => {
  return (
    <StyledRow type="flex" justify="center">
      <Col span={5}>
        <ContentColumn icon={secureIcon}>
          <ContentColumn.Head>Stay Safe</ContentColumn.Head>
          <ContentColumn.Text>
            Make sure the people, pets and places that you love stay safe.
          </ContentColumn.Text>
        </ContentColumn>
      </Col>

      <Col span={5} offset={2}>
        <ContentColumn icon={funIcon}>
          <ContentColumn.Head>Have Fun</ContentColumn.Head>
          <ContentColumn.Text>
            Run a game server and allow friends to connect from across the
            globe.
          </ContentColumn.Text>
        </ContentColumn>
      </Col>

      <Col span={5} offset={2}>
        <ContentColumn icon={aboutIcon}>
          <ContentColumn.Head>Forget About It</ContentColumn.Head>
          <ContentColumn.Text>
            Simply point your IP to an easy to remember hostname.
          </ContentColumn.Text>
        </ContentColumn>
      </Col>
    </StyledRow>
  );
};

export default Description;
