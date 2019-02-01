import React, { useEffect } from "react";
import { useStore, useAction } from "easy-peasy";
import { StyledAlert } from "./styles";
import MessageConstructor from "../Common/LoadingMessage";

const loadingMessage = MessageConstructor({ content: "Signing in..." });

const confirmEmail = async ({ state }, confirmEmailAction) => {
  const validPathname = "/managed/verify";
  const { pathname, search } = state;

  try {
    if (search && pathname === validPathname) {
      const urlSearch = new URLSearchParams(search);
      const code = urlSearch.get("code");
      if (!code) throw new Error("Invalid request (params).");

      await confirmEmailAction(code);
      loadingMessage.success("Email confirmed successfully.");
    }
  } catch (error) {
    loadingMessage.error(error.message);
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
