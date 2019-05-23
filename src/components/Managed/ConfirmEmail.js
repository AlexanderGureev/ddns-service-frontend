import React, { useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import { StyledAlert } from "./styles";
import MessageConstructor from "../Common/LoadingMessage";

const loadingMessage = MessageConstructor({ content: "Signing in..." });

const confirmEmail = async (location, confirmEmailAction) => {
  const validPathname = "/managed/verify";
  const { pathname = "", search = "" } = location.state || location || {};

  try {
    if (search && pathname === validPathname) {
      const urlSearch = new URLSearchParams(search);
      const code = urlSearch.get("code");
      if (!code) throw new Error("Verification link is not valid.");

      await confirmEmailAction(code);
      loadingMessage.success("Email confirmed successfully.");
    }
  } catch (error) {
    loadingMessage.error(error.message);
  }
};

const ConfirmEmail = ({ location, ...rest }) => {
  const { emailConfirm, provider } = useStore(state => state.session.profile);
  const { confirmEmailAction } = useActions(actions => actions.session);

  useEffect(() => {
    confirmEmail(location, confirmEmailAction);
  }, []);

  return (
    !emailConfirm &&
    !provider && (
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
