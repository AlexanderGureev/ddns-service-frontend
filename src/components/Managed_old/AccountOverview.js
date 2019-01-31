import React from "react";
import {
  AccountOverviewWrapper,
  AccountOverviewTitle as Title,
  ContentBlock,
  Footer
} from "./styles";

const AccountOverview = props => (
  <AccountOverviewWrapper>
    <Title>Account Overview</Title>
    <ContentBlock>
      <ContentBlock.Title>Last Login</ContentBlock.Title>
      <ContentBlock.Text>95.165.136.7</ContentBlock.Text>
    </ContentBlock>
    <ContentBlock>
      <ContentBlock.Title>Last Login</ContentBlock.Title>
      <ContentBlock.Text>Jan 2, 2019 16:31:38 PST</ContentBlock.Text>
    </ContentBlock>
    <Footer>Upgrade to Enchanced</Footer>
  </AccountOverviewWrapper>
);

export default AccountOverview;
