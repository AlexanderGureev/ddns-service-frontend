import React from "react";
import Menu from "./Menu";
import HeaderContent from "./HeaderContent";
import { LeftPartWrapper } from "./styles";

const LeftPart = () => {
  return (
    <LeftPartWrapper>
      <Menu />
      <HeaderContent />
    </LeftPartWrapper>
  );
};

export default LeftPart;
