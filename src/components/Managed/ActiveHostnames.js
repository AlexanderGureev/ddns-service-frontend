import React from "react";
import { ActiveHostnamesWrapper, ActiveHostnameContainer } from "./styles";
import infoBlockBg from "./img/info-block-bg.svg";

const ActiveHostnames = props => (
  <ActiveHostnamesWrapper src={infoBlockBg}>
    <ActiveHostnameContainer>
      <ActiveHostnameContainer.Count>0</ActiveHostnameContainer.Count>
      <ActiveHostnameContainer.Title>Active</ActiveHostnameContainer.Title>
      <ActiveHostnameContainer.Text>hostnames</ActiveHostnameContainer.Text>
    </ActiveHostnameContainer>
  </ActiveHostnamesWrapper>
);

export default ActiveHostnames;
