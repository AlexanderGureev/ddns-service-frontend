import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
import { StyledAlert } from "../styles";

const AccountNotice = ({ location }) => {
  const { username } = useStoreState(state => state.session.profile);

  useEffect(() => {}, []);

  return (
    !username && (
      <StyledAlert
        message="Complete your account. Create a username now."
        type="warning"
        closeText="Close Now"
        showIcon
        banner
      />
    )
  );
};

export default AccountNotice;
