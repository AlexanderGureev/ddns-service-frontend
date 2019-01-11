import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 950px;
  z-index: 10;
`;

export const Head = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 20px 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

export const LinkMore = styled.a`
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0;
  display: block;
  color: white;
`;

export const Image = styled.img.attrs(({ src }) => ({ src }))`
  width: 220px;
  height: 220px;
`;
