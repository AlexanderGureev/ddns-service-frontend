import styled from "styled-components";
import { Row as AntdRow, Col as AntdCol } from "antd";

export const ContentWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ContentBlock = styled.div`
  font-family: "Montserrat";
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  line-height: 1.7;
  min-height: 100vh;
`;
const ContentBlockTitle = styled.p`
  color: #012052;
  font-size: 52px;
  font-weight: 700;
  margin: 0;
  width: 700px;
  padding-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 45px;
    width: 500px;
  }

  @media (max-width: 680px) {
    font-size: 35px;
    min-width: 200px;
    width: auto;
    padding: 5px 30px;
  }
  @media (max-width: 460px) {
    font-size: 25px;
  }
`;

const ContentBlockCaption = styled(ContentBlockTitle)`
  color: #7c7c7c;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Row = styled(AntdRow)`
  display: flex;
  align-items: baseline;
  margin-top: 50px;
`;
export const Col = styled(AntdCol)`
  text-align: center;
`;

export const ContentCard = styled.div`
  font-family: "Montserrat";
`;

const CardImageWrapper = styled.div`
  @media (max-width: 767px) {
    height: 210px;
  }
  svg {
    @media (max-width: 1500px) {
      width: 150px;
    }

    @media (max-width: 960px) {
      width: 120px;
    }
  }
`;

const CardTitle = styled.p`
  margin: 0;
  padding: 20px 0 10px 0;
  color: #012052;
  font-weight: 700;
  font-size: 30px;
  white-space: nowrap;

  @media (max-width: 1500px) {
    padding-top: 0;
    font-size: 25px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
    white-space: pre-wrap;
  }
`;
const CardText = styled.p`
  margin: 0;
  padding: 20px 0 10px 0;
  color: #7c7c7c;
  font-weight: 400;
  font-size: 18px;

  @media (max-width: 1200px) {
    padding-top: 0;
    font-size: 14px;
  }
`;

export const PricingPlanBlock = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  position: relative;

  @media (max-width: 640px) {
    padding: 100px 0;
  }
`;

const PricingPlanHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  font-family: "Montserrat";
  color: #fff;

  @media (max-width: 640px) {
    padding: 0 25px;
  }
`;
const PricingPlanHeaderTitle = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: 400;
  padding-bottom: 15px;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 35px;
  }

  @media (max-width: 460px) {
    font-size: 27px;
  }
`;
const PricingPlanHeaderCaption = styled(PricingPlanHeaderTitle)`
  font-size: 20px;
  text-transform: none;
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

const CardBlock = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

PricingPlanBlock.CardBlock = CardBlock;
PricingPlanHeader.Title = PricingPlanHeaderTitle;
PricingPlanHeader.Caption = PricingPlanHeaderCaption;
PricingPlanBlock.Header = PricingPlanHeader;

ContentCard.ImgWrapper = CardImageWrapper;
ContentCard.Title = CardTitle;
ContentCard.Text = CardText;

ContentBlock.Title = ContentBlockTitle;
ContentBlock.Caption = ContentBlockCaption;
