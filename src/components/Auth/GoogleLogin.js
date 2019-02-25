import React, { useState, useLayoutEffect, useRef } from "react";
import { useActions } from "easy-peasy";
import googleIcon from "./img/soc-google.svg";
import { Form } from "./styles";
import SocialService from "../../services/social";
import MessageConstructor from "../Common/LoadingMessage";

const loadingMessage = MessageConstructor({ content: "Signing in..." });

const GoogleLogin = ({
  requestCodeUrl = "",
  clientId = "",
  redirectUri = "",
  onFailure = () => {},
  onSuccess = () => {},
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  const { socialAuthorizeUserAction } = useActions(actions => actions.session);

  const provider = "google";
  const loadingIndicator = useRef(() => {});
  const socialService = new SocialService(requestCodeUrl);

  const setLoadingIndicator = () => {
    loadingIndicator.current = loadingMessage.open();
  };
  const clearLoadingIndicator = () => loadingIndicator.current();

  useLayoutEffect(
    () => {
      loading ? setLoadingIndicator() : clearLoadingIndicator();
    },
    [loading]
  );

  const onButtonClick = e => {
    e.preventDefault();
    getParams()
      .then(queryParams => {
        socialService.getCode(queryParams, success, failure);
      })
      .catch(failure);
  };

  const getParams = async () => {
    if (!clientId || !redirectUri || !requestCodeUrl) {
      throw new Error("Bad params");
    }
    const token = await socialService.getRequestToken();

    const params = {
      response_type: rest.responseType || "code",
      scope:
        rest.scope ||
        ["profile", "https://www.googleapis.com/auth/userinfo.email"].join(" "),
      client_id: clientId,
      redirect_uri: redirectUri,
      include_granted_scopes: true,
      state: token
    };

    const paramsConstructor = new URLSearchParams();
    Object.keys(params).map(key => paramsConstructor.append(key, params[key]));

    return paramsConstructor.toString();
  };

  const success = async (code, state) => {
    try {
      setLoading(true);
      await socialAuthorizeUserAction({ provider, code, state });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      onFailure(error.message);
    }
  };

  const failure = error => {
    console.log(error.message || error);
  };

  return (
    <Form.SocialBlock.Icon
      src={googleIcon}
      onClick={onButtonClick}
      alt="google oauth"
    />
  );
};

export default GoogleLogin;
