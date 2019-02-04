import React from "react";
import ContentBackgroundCircles from "./ContentBackgroundCircles";
import PricingPlanBlock from "./PricingPlanBlock";
import { ContentWrapper, ContentBlock } from "./styles";
import ChooseCard from "./ChooseCard";

const Content = props => (
  <ContentWrapper>
    <ContentBackgroundCircles />
    <ContentBlock>
      <ContentBlock.Title>Why Choose us</ContentBlock.Title>
      <ContentBlock.Caption>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </ContentBlock.Caption>
      <ChooseCard />
    </ContentBlock>
    <PricingPlanBlock />
  </ContentWrapper>
);

export default Content;
