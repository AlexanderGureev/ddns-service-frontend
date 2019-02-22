import React from "react";
import { useMedia } from "react-use";
import { ReactComponent as notifIcon } from "./img/notif-icon.svg";
import { ReactComponent as langIcon } from "./img/lang-icon.svg";
import {
  Header as StyledHeader,
  BtnContainer,
  Search,
  Icon,
  Badge
} from "./styles";
import ShortProfile from "./ShortProfile";
import ShoppingCart from "./ShoppingCart";

const Header = ({
  collapsed,
  toggleSideMenu,
  visible,
  handleVisibleChange
}) => {
  const isMediumSize = useMedia("(max-width: 1200px)");

  return (
    <StyledHeader>
      <StyledHeader.Container>
        <BtnContainer>
          <Icon
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggleSideMenu}
          />
        </BtnContainer>
        <Search placeholder="Search..." enterButton />
      </StyledHeader.Container>

      <StyledHeader.Container>
        {!isMediumSize && (
          <>
            <BtnContainer>
              <Badge dot>
                <Icon component={notifIcon} />
              </Badge>
            </BtnContainer>
            <BtnContainer>
              <ShoppingCart />
            </BtnContainer>
            <BtnContainer>
              <Icon component={langIcon} />
            </BtnContainer>
          </>
        )}
        <ShortProfile
          visible={visible}
          handleVisibleChange={handleVisibleChange}
        />
      </StyledHeader.Container>
    </StyledHeader>
  );
};

export default Header;
