import React from "react";
import Preloader from "./Preloader";
import {
  ContentWrapper,
  StatusCode,
  Text,
  StyledCode,
  HomeLink
} from "./styles";

const NoMatch = ({ location, className }, disableLink = false) => (
  <Preloader className={className}>
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
