import React from "react";
import { message } from "antd";
import YandexLogin from "./YandexLogin";
import VkLogin from "./VkLogin";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import { Form } from "./styles";

const SocialBlock = props => {
  const yandexOnFailed = error => message.error(error);
  const yandexOnSuccess = response => console.log(response);

  const vkOnFailed = error => message.error(error);
  const vkOnSuccess = response => console.log(response);

  const googleOnFailed = error => message.error(error);
  const googleOnSuccess = response => console.log(response);

  const facebookOnFailed = error => message.error(error);
  const facebookOnSuccess = response => console.log(response);

  return (
    <Form.SocialBlock>
      <Form.SocialBlock.Head>with your social network</Form.SocialBlock.Head>
      <Form.SocialBlock.IconBox>
        <FacebookLogin
          onFailure={facebookOnFailed}
          onSuccess={facebookOnSuccess}
        />
        <GoogleLogin onFailure={googleOnFailed} onSuccess={googleOnSuccess} />
        <VkLogin onFailure={vkOnFailed} onSuccess={vkOnSuccess} />
        <YandexLogin
          redirectUri="https://best-service.online/login"
          clientId={process.env.REACT_APP_YANDEX_CLIENT_ID}
          onFailure={yandexOnFailed}
          onSuccess={yandexOnSuccess}
        />
      </Form.SocialBlock.IconBox>
      <Form.SocialBlock.Footer>or</Form.SocialBlock.Footer>
    </Form.SocialBlock>
  );
};

export default SocialBlock;
