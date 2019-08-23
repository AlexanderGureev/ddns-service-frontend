import React, { useEffect } from "react";
import uniqueId from "lodash/uniqueId";
import { useStoreActions, useStoreState } from "easy-peasy";
import { notification } from "antd";
import { Content as StyledContent } from "../styles";
import { ReactComponent as CardFree } from "./img/card-free.svg";
import { ReactComponent as CardPro } from "./img/card-pro.svg";
import { ReactComponent as CardUltimate } from "./img/card-ultimate.svg";
import arrowCard from "./img/arrow-card.svg";
import { PricingContainer, PriceCard, Button } from "./styles";

notification.config({ top: 70 });
const cardData = [
  {
    id: uniqueId(),
    icon: CardFree,
    price: "0",
    name: "free",
    description: ["3 hostnames", "Limited domains", "Confirm every 30 days"],
    months: 1,
    free: true
  },
  {
    id: uniqueId(),
    primary: true,
    icon: CardPro,
    price: "7",
    name: "pro",
    description: ["20+ Hostnames", "Hosts never expire", "30+ domain options"],
    months: 1
  },
  {
    id: uniqueId(),
    icon: CardUltimate,
    price: "19",
    name: "ultimate",
    description: ["50+ Hostnames", "Free domain registration", "24/7 support"],
    months: 1
  }
];
const openNotification = () => {
  notification.success({
    message: "A new item has been added to your cart."
  });
};

const PricingPage = () => {
  const { addToCartAction } = useStoreActions(actions => actions.session);
  const { cart } = useStoreState(state => state.session);

  const handleClick = id => {
    const foundItem = cardData.find(item => item.id === id);
    const isAlredyAdded = cart.find(item => item.id === id);
    addToCartAction({
      id: foundItem.id,
      price: foundItem.price,
      name: foundItem.name,
      months: foundItem.months
    });
    !isAlredyAdded && openNotification();
  };

  useEffect(
    () => () => {
      notification.destroy();
    },
    []
  );

  return (
    <StyledContent.Wrapper>
      <PricingContainer>
        {cardData.map(
          ({
            id,
            icon,
            price,
            name,
            description,
            primary = false,
            free = false
          }) => (
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
                <PriceCard.Link>More...</PriceCard.Link>
              </PriceCard.DescriptionList>
              <Button onClick={() => handleClick(id)} disabled={free}>
                {free
                  ? "Free sign up"
                  : cart.length && cart.find(item => item.id === id)
                  ? "In your cart"
                  : "Select plan"}
              </Button>
            </PriceCard>
          )
        )}
      </PricingContainer>
    </StyledContent.Wrapper>
  );
};

export default PricingPage;
