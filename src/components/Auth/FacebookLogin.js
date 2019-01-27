import React, { useEffect } from "react";
import { Form } from "./styles";
import facebookIcon from "./img/soc-facebook.svg";

const FacebookLogin = ({ onFailure, onSuccess }) => {
  useEffect(() => {
    facebookOAuth2Init();
  }, []);

  const facebookOAuth2Init = () => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    document.body.appendChild(script);

    script.addEventListener("load", facebookApiInit);
  };

  const facebookApiInit = () => {
    const { FB } = window;
    FB.init(
      {
        appId: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
        version: "v3.2"
      },
      { scope: "public_profile,email" }
    );
  };

  const facebookLogout = () => {
    const { FB } = window;
    FB.logout(response => {
      console.log({ response });
    });
  };

  const fbSignIn = e => {
    const { FB } = window;
    FB.login(response => {
      console.log({ response });
    });
  };

  return <Form.SocialBlock.Icon src={facebookIcon} onClick={fbSignIn} />;
};

export default FacebookLogin;
