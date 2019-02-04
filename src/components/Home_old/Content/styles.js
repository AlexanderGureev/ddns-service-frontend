import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: #2868d7 url(${props => props.src}) no-repeat center bottom;
  width: 100%;
  min-height: 1150px;
  z-index: 10;

  @media (max-width: 1300px) {
    min-height: 1000px;
  }
  @media (max-width: 570px) {
    min-height: 860px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  top: 170px;

  @media (max-width: 1300px) {
    top: 140px;
  }
`;

export const Head = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 20px 0;

  @media (max-width: 1300px) {
    font-size: 25px;
  }
  @media (max-width: 970px) {
    font-size: 22px;
  }
  @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;

  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 570px) {
    font-size: 12px;
  }
`;

export const LinkMore = styled.a`
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0;
  display: block;
  color: white;

  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 570px) {
    font-size: 14px;
  }
`;

export const Image = styled.img.attrs(({ src }) => ({ src }))`
  width: 220px;
  height: 220px;

  @media (max-width: 1300px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 970px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 380px) {
    width: 90px;
    height: 90px;
  }
`;
