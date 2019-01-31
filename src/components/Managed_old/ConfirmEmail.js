import React, { useEffect } from "react";
import { useStore, useAction } from "easy-peasy";
import { message } from "antd";
import { StyledAlert } from "./styles";

const confirmEmail = async ({ search, pathname }, confirmEmailAction) => {
  const validPathname = "/managed/verify";
  try {
    if (search && pathname === validPathname) {
      const urlSearch = new URLSearchParams(search);
      const code = urlSearch.get("code");
      if (!code) throw new Error("Invalid request (params).");

      await confirmEmailAction(code);
      message.success("Email confirmed successfully.");
    }
  } catch (error) {
    message.error(error.message);
  }
};

const ConfirmEmail = ({ location }) => {
  const { emailConfirm = false } = useStore(state => state.session.profile);
  const { confirmEmailAction } = useAction(dispatch => dispatch.session);

  useEffect(() => {
    confirmEmail(location, confirmEmailAction);
  }, []);

  return (
    !emailConfirm && (
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
