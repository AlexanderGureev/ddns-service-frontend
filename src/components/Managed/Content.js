import React from "react";
import { Route } from "react-router-dom";
import { StyledContent } from "./styles";
import MainPage from "./MainPage";
import contentBg from "./img/content-bg-managed.svg";

const Content = props => {
  console.log(props);
  return (
    <StyledContent src={contentBg}>
      <MainPage />
    </StyledContent>
  );
};

export default Content;
