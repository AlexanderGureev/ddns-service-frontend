import React from "react";
import uniqueId from "lodash/uniqueId";
import { Content as StyledContent } from "../styles";
import { ReactComponent as CardFree } from "./img/card-free.svg";
import { ReactComponent as CardPro } from "./img/card-pro.svg";
import { ReactComponent as CardUltimate } from "./img/card-ultimate.svg";
import arrowCard from "./img/arrow-card.svg";
import { PricingContainer, PriceCard, Button } from "./styles";

const cardData = [
  {
    id: uniqueId(),
    icon: CardFree,
    price: "0",
    name: "free",
    description: ["3 hostnames", "Limited domains", "Confirm every 30 days"]
  },
  {
    id: uniqueId(),
    primary: true,
    icon: CardPro,
    price: "7",
    name: "pro",
    description: ["20+ Hostnames", "Hosts never expire", "30+ domain options"]
  },
  {
    id: uniqueId(),
    icon: CardUltimate,
    price: "19",
    name: "ultimate",
    description: ["50+ Hostnames", "Free domain registration", "24/7 support"]
  }
];
const PricingPage = () => (
  <StyledContent.Wrapper>
    <PricingContainer>
      {cardData.map(
        ({ id, icon, price, name, description, primary = false }, i) => (
          <PriceCard key={id} primary={primary}>
            <PriceCard.Icon component={icon} />
            <PriceCard.Price>{price}</PriceCard.Price>
            <PriceCard.PlanName>{name}</PriceCard.PlanName>
            <PriceCard.DescriptionList>
              {description.map((item, i) => (
                <PriceCard.DescriptionList.Item src={arrowCard} key={i}>
                  {item}
                </PriceCard.DescriptionList.Item>
              ))}
            </PriceCard.DescriptionList>
            <Button>Select plan</Button>
          </PriceCard>
        )
      )}
    </PricingContainer>
  </StyledContent.Wrapper>
);

export default PricingPage;
