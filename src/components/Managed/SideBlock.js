import React from "react";
import { useMedia } from "react-use";
import { StyledSide, Logo, MiniLogo } from "./styles";

import CircleLayer from "./CircleLayer";
import SideMenu from "./SideMenu";

const SideBlock = ({ collapsed, toggleSideMenu, match }) => {
  const isExtraSmallSize = useMedia("(max-width: 480px)");

  return (
    <StyledSide
      trigger={!isExtraSmallSize ? null : ""}
      collapsible
      collapsed={collapsed}
      onCollapse={toggleSideMenu}
      width={300}
    >
      {collapsed ? <MiniLogo /> : <Logo />}

      <SideMenu />

      <CircleLayer />
    </StyledSide>
  );
};

export default SideBlock;
