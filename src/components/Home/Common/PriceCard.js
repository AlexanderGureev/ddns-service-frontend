import styled from "styled-components";
import React from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const StyledPriceCard = styled.div`
  font-family: "Montserrat";
  background: ${props =>
    props.main
      ? "linear-gradient(180deg, #0084D8, #133557)"
      : "linear-gradient(to left bottom, #133557, #0084D8)"};
  border-radius: 20px;
  padding: 30px 60px;
  position: relative;
  bottom: ${props => (props.main ? "60px" : "0px")};
  left: ${props => (props.left ? "30px" : "none")};
  right: ${props => (props.right ? "30px" : "none")};
  z-index: ${props => (props.main ? "1" : "0")};
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 960px) {
    padding: 30px 40px;
  }

  @media (max-width: 830px) {
    padding: 30px 30px;
  }

  @media (max-width: 640px) {
    margin-bottom: 50px;

    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PriceCardTitle = styled.p`
  font-weight: ${props => (props.main ? "500" : "400")};
  color: #fff;
  font-size: ${props => (props.main ? "55px" : "30px")};
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  display: block;

  @media (max-width: 960px) {
    font-size: ${props => (props.main ? "40px" : "25px")};
  }
`;

const PriceBlock = styled.div`
  text-align: center;
`;
const Period = styled.span`
  font-size: 14px;
  color: #fff;
  padding-left: 5px;
`;
const CardPrice = styled(PriceCardTitle)`
  display: inline-block;
`;

const CardList = styled.ul`
  padding: 30px 0;
  margin: 0;
  list-style: none;
  color: #fff;
`;
const CardItem = styled.li`
  font-size: 14px;
  @media (max-width: 830px) {
    font-size: 12px;
  }
  :not(:last-child) {
    padding-bottom: 6px;
  }
`;
const CardButton = styled(Button)`
  text-transform: uppercase;
  position: relative;
  bottom: ${props => (props.main ? "none" : "-5px")};

  @media (max-width: 830px) {
    padding: 8px 40px;
    font-size: 14px;
  }
`;

CardList.Item = CardItem;
StyledPriceCard.Title = PriceCardTitle;
PriceBlock.Price = CardPrice;
StyledPriceCard.List = CardList;
StyledPriceCard.Button = CardButton;
StyledPriceCard.PriceBlock = PriceBlock;
StyledPriceCard.PriceBlock.Period = Period;

const PriceCard = ({
  title,
  price,
  content,
  main = false,
  period = "month",
  left = false,
  right = false
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), zIndex: main ? 1 : 0 }}
    >
      <StyledPriceCard
        main={main ? "true" : undefined}
        left={left}
        right={right}
      >
        <StyledPriceCard.Title main={main ? "true" : undefined}>
          {title}
        </StyledPriceCard.Title>

        <StyledPriceCard.PriceBlock>
          <StyledPriceCard.PriceBlock.Price>
            {price}$
          </StyledPriceCard.PriceBlock.Price>
          <StyledPriceCard.PriceBlock.Period>
            /{period}
          </StyledPriceCard.PriceBlock.Period>
        </StyledPriceCard.PriceBlock>
        <StyledPriceCard.List>
          {content.map((item, i) => (
            <StyledPriceCard.List.Item key={i}>
              {item}
            </StyledPriceCard.List.Item> // eslint-disable-line
          ))}
        </StyledPriceCard.List>
        <CardButton main={main ? "true" : undefined}>Buy Now</CardButton>
      </StyledPriceCard>
    </animated.div>
  );
};

export default PriceCard;
