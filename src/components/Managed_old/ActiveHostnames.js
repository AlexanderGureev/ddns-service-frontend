import React from "react";
import {
  ActiveHostnamesWrapper,
  ActiveHostnameContainer,
  CircleLayer
} from "./styles";

const ActiveHostnames = props => (
  <ActiveHostnamesWrapper>
    <CircleLayer />
    <ActiveHostnameContainer>
      <ActiveHostnameContainer.Count>0</ActiveHostnameContainer.Count>
      <ActiveHostnameContainer.Title>Active</ActiveHostnameContainer.Title>
      <ActiveHostnameContainer.Text>hostnames</ActiveHostnameContainer.Text>
    </ActiveHostnameContainer>
  </ActiveHostnamesWrapper>
);

export default ActiveHostnames;
