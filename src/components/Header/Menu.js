import React from "react";
import btn from "./img/menu-btn.svg";
import { MenuBtnWrapper, MenuBtn } from "./styles";

const Menu = () => {
  return (
    <MenuBtnWrapper>
      <MenuBtn src={btn} />
    </MenuBtnWrapper>
  );
};

export default Menu;
