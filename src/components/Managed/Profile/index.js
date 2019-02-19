import React from "react";
import { Content as StyledContent } from "../styles";
import ProfileForms from "./ProfileForms";
import { ProfilePageWrapper } from "./styles";
import ProfileHeader from "./ProfileHeader";
import AccountNotice from "./AccountNotice";

const ProfilePage = props => (
  <>
    <AccountNotice />
    <ProfilePageWrapper>
      <StyledContent.Wrapper>
        <ProfileHeader />
      </StyledContent.Wrapper>
      <StyledContent.Wrapper>
        <ProfileForms />
      </StyledContent.Wrapper>
    </ProfilePageWrapper>
  </>
);

export default ProfilePage;
