import React, { useEffect } from "react";
import { Form } from "./styles";
import vkIcon from "./img/soc-vk.svg";

const VkLogin = ({ onFailure, onSuccess }) => {
  useEffect(() => {
    vkOAuth2Init();
  }, []);

  const vkOAuth2Init = () => {
    const script = document.createElement("script");
    script.src = "https://vk.com/js/api/openapi.js?160";
    document.body.appendChild(script);

    script.addEventListener("load", vkApiInit);
  };

  const vkApiInit = () => {
    const { VK } = window;
    VK.init({
      apiId: process.env.REACT_APP_VK_CLIENT_ID
    });
  };

  const vkSignIn = e => {
    const { VK } = window;
    VK.Auth.login(data => {
      console.log({ data });
    });
  };

  const vkLogout = e => {
    window.VK.Auth.logout(data => {
      console.log({ data });
    });
  };

  return <Form.SocialBlock.Icon src={vkIcon} onClick={vkSignIn} />;
};

export default VkLogin;
