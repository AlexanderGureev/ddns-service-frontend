import React from "react";
import Preloader from "./Preloader";
import {
  ContentWrapper,
  StatusCode,
  Text,
  StyledCode,
  HomeLink
} from "./styles";

const NoMatch = ({ location }, disableLink = false) => (
  <Preloader>
    <ContentWrapper>
      <StatusCode>404</StatusCode>
      <Text>
        No match for <StyledCode>{location.pathname}</StyledCode>
      </Text>
      {!disableLink && <HomeLink to="/">Home</HomeLink>}
    </ContentWrapper>
  </Preloader>
);

export default NoMatch;
