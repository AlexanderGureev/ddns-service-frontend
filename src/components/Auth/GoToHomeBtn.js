import React from "react";
import btnIcon from "./img/gohome-icon.svg";
import { BtnContainer } from "./styles";

const GoToHomeBtn = props => {
  return (
    <BtnContainer>
      <BtnContainer.Icon src={btnIcon} />
      <BtnContainer.Link to="/" />
    </BtnContainer>
  )
}

export default GoToHomeBtn;
