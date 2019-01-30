import React, { memo } from "react";
import { message } from "antd";
import YandexLogin from "./YandexLogin";
import VKLogin from "./VkLogin";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import { Form } from "./styles";

const SocialBlock = memo(props => {
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
          requestCodeUrl={process.env.REACT_APP_FACEBOOK_REQUEST_URL}
          redirectUri={process.env.REACT_APP_FACEBOOK_REDIRECT_URL}
          clientId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
          onFailure={facebookOnFailed}
          onSuccess={facebookOnSuccess}
        />
        <GoogleLogin
          requestCodeUrl={process.env.REACT_APP_GOOGLE_REQUEST_URL}
          redirectUri={process.env.REACT_APP_GOOGLE_REDIRECT_URL}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onFailure={googleOnFailed}
          onSuccess={googleOnSuccess}
        />
        <VKLogin
          requestCodeUrl={process.env.REACT_APP_VK_REQUEST_URL}
          redirectUri={process.env.REACT_APP_VK_REDIRECT_URL}
          clientId={process.env.REACT_APP_VK_CLIENT_ID}
          onFailure={vkOnFailed}
          onSuccess={vkOnSuccess}
        />
        <YandexLogin
          requestCodeUrl={process.env.REACT_APP_YANDEX_REQUEST_URL}
          redirectUri={process.env.REACT_APP_YANDEX_REDIRECT_URL}
          clientId={process.env.REACT_APP_YANDEX_CLIENT_ID}
          onFailure={yandexOnFailed}
          onSuccess={yandexOnSuccess}
        />
      </Form.SocialBlock.IconBox>
      <Form.SocialBlock.Footer>or</Form.SocialBlock.Footer>
    </Form.SocialBlock>
  );
});

export default SocialBlock;
