import React from "react";
import styled from "styled-components";
import btn from "./img/menu-btn.svg";

const MenuBtnWrapper = styled.div`
  cursor: pointer;  
  z-index: 1;
`;
const MenuBtn = styled.img.attrs(({ src }) => ({ src }))`
  width: 35px;
  height: auto;
`;

const Menu = () => {
  return (
    <MenuBtnWrapper>
      <MenuBtn src={btn} />
    </MenuBtnWrapper>
  );
};

export default Menu;
