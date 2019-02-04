import React from "react";
import HeaderContent from "./HeaderContent";
import { LeftPartWrapper } from "./styles";

const LeftPart = props => (
  <LeftPartWrapper>
    <HeaderContent {...props} />
  </LeftPartWrapper>
);

export default LeftPart;
