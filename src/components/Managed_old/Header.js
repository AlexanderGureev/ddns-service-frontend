import React, { memo } from "react";
import { useMedia } from "react-use";
import { StyledHeader, StyledBtn, Search } from "./styles";
import shoppingIcon from "./img/shopping-cart.svg";
import notificationIcon from "./img/notification.svg";
import languageIcon from "./img/language.svg";
import sideMenuIcon from "./img/sidemenu-icon.svg";

const Header = ({ toggleClicked, toggleVisible }) => {
  const isBig = useMedia("(max-width: 1200px)");
  const isSmall = useMedia("(max-width: 720px)");

  return (
    <StyledHeader>
      <StyledHeader.Container>
        <StyledBtn
          onClick={() => {
            toggleClicked();
            toggleVisible();
          }}
        >
          <StyledBtn.Icon src={sideMenuIcon} />
        </StyledBtn>
        {!isSmall && <Search placeholder="Search..." enterButton />}
      </StyledHeader.Container>
      <StyledHeader.Container>
        <StyledBtn>
          <StyledBtn.Icon src={notificationIcon} />
        </StyledBtn>
        <StyledBtn>
          <StyledBtn.Icon src={shoppingIcon} />
        </StyledBtn>
        <StyledBtn>
          <StyledBtn.Icon src={languageIcon} />
          {!isBig && <StyledBtn.Text>Language</StyledBtn.Text>}
        </StyledBtn>
      </StyledHeader.Container>
    </StyledHeader>
  );
};

export default Header;
