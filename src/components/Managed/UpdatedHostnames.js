import React from "react";
import { UpdatedHostnamesWrapper, UpdatedHostnameContainer } from "./styles";
import infoBlockBg from "./img/info-block-bg.svg";

const UpdatedHostnames = props => (
  <UpdatedHostnamesWrapper src={infoBlockBg}>
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
