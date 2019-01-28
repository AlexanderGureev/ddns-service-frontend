import React from "react";
import { useStore } from "easy-peasy";
import { StyledAlert } from "./styles";

const ConfirmEmail = props => {
  const { confirmEmail = false } = useStore(state => state.session.profile);

  return (
    !confirmEmail && (
      <StyledAlert
        message="Please Confirm Your E-mail Address."
        type="warning"
        closeText="Close Now"
        showIcon
        banner
      />
    )
  );
};

export default ConfirmEmail;
