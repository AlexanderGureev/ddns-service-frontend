import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import HeaderContent from "./HeaderContent";

const LeftPartWrapper = styled.div`
  position: absolute;
  width: 700px;
  height: 60%;
  top: 40px;
  left: 100px;
`;

const LeftPart = () => {
  return (
    <LeftPartWrapper>
      <Menu />
      <HeaderContent />
    </LeftPartWrapper>
  );
};

export default LeftPart;
