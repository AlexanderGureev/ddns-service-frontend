import React from "react";
import contentBg from "./img/content-bg.svg";

import PriceCard from "../Common/PriceCard";
import { PricingPlanBlock } from "./styles";

const cardContent = [
  "50 GB Analitic traffic",
  "1 Site Free",
  "10 Email Notification",
  "2 Domains Free",
  "cPanel and Plesk",
  "24/7 free suppors"
];

const PricingPlackBlock = () => (
  <PricingPlanBlock src={contentBg}>
    <PricingPlanBlock.Header>
      <PricingPlanBlock.Header.Title>
        OUR PRICING PLAN
      </PricingPlanBlock.Header.Title>
      <PricingPlanBlock.Header.Caption>
        Choose your suitable web hosting package or call us for help
      </PricingPlanBlock.Header.Caption>
    </PricingPlanBlock.Header>

    <PricingPlanBlock.CardBlock>
      <PriceCard title="balance" price={4} content={cardContent} left />
      <PriceCard title="plus" price={20} content={cardContent} main />
      <PriceCard title="pro" price={8} content={cardContent} right />
    </PricingPlanBlock.CardBlock>
  </PricingPlanBlock>
);

export default PricingPlackBlock;
