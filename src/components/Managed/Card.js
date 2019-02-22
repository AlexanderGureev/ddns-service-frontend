import React from "react";
import { useMedia } from "react-use";
import { CardBackgroundCircles, Card as StyledCard } from "./styles";

export const Card = ({ colorA, colorB, title, text, smallText }) => {
  const isExtraSmallSize = useMedia("(max-width: 380px)");
  return (
    <StyledCard colorA={colorA} colorB={colorB}>
      <StyledCard.Title>{title}</StyledCard.Title>
      <StyledCard.Content>
        <StyledCard.Content.Text>{text}</StyledCard.Content.Text>
        <StyledCard.Content.SmallText>{smallText}</StyledCard.Content.SmallText>
      </StyledCard.Content>
      {!isExtraSmallSize && <CardBackgroundCircles />}
    </StyledCard>
  );
};

export const BigCard = ({ colorA, colorB, title, footer, children }) => (
  <StyledCard colorA={colorA} colorB={colorB}>
    <StyledCard.Title center no-padding>
      {title}
    </StyledCard.Title>
    {children}
    {footer && (
      <StyledCard.Footer>
        <StyledCard.Button>{footer}</StyledCard.Button>
      </StyledCard.Footer>
    )}
  </StyledCard>
);
