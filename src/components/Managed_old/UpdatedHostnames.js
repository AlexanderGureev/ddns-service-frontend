import React from "react";
import {
  UpdatedHostnamesWrapper,
  UpdatedHostnameContainer,
  CircleLayer
} from "./styles";

const UpdatedHostnames = props => (
  <UpdatedHostnamesWrapper>
    <CircleLayer />
    <UpdatedHostnameContainer>
      <UpdatedHostnameContainer.Count>0</UpdatedHostnameContainer.Count>
      <UpdatedHostnameContainer.Title>Hostname</UpdatedHostnameContainer.Title>
      <UpdatedHostnameContainer.Text>
        updates detected
      </UpdatedHostnameContainer.Text>
    </UpdatedHostnameContainer>
  </UpdatedHostnamesWrapper>
);

export default UpdatedHostnames;
