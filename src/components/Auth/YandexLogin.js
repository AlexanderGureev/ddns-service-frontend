import React, { Component } from "react";
import { withCookies } from "react-cookie";
import { Form } from "./styles";
import yandexIcon from "./img/soc-yandex.svg";
import { getTokenApi, sendSocialCodeApi } from "../../services/api";

class YandexLogin extends Component {
  constructor(props) {
    super(props);
    this.requestCodeUrl =
      "https://oauth.yandex.ru/authorize?response_type=code";
  }

  onButtonClick = e => {
    e.preventDefault();
    return this.getCode();
  };

  getHeaders() {
    const headers = Object.assign({}, this.props.customHeaders || {});
    headers["Content-Type"] = "application/json";
    return headers;
  }

  getCode = async () => {
    const { redirectUri, clientId, onFailure, cookies } = this.props;
    console.log(cookies.getAll());
    try {
      const response = await getTokenApi();
      console.log({ response });
      console.log(cookies.getAll());

      const token = cookies.get("csrftoken");
      if (!token) throw new Error("Token request error.");

      const popup = this.openPopup();
      popup.location = `${
        this.requestCodeUrl
      }&client_id=${clientId}&redirect_uri=${redirectUri}&state=${token}`;
      this.polling(popup);
    } catch (error) {
      console.log(error);
      onFailure("Authorization error, try again later.");
    }
  };

  openPopup = () => {
    const w = 600;
    const h = 400;
    const left = window.screen.width / 2 - w / 2;
    const top = window.screen.height / 2 - h / 2;

    return window.open(
      "",
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );
  };

  polling = popup => {
    const polling = setInterval(() => {
      try {
        if (popup.location.href !== "about:blank") {
          if (!popup || popup.closed || popup.closed === undefined) {
            clearInterval(polling);
            this.props.onFailure(new Error("Popup has been closed by user"));
          }

          const closeDialog = () => {
            clearInterval(polling);
            popup.close();
          };

          if (popup.location.href) {
            // const query = new URLSearchParams(popup.location.hash.slice(1));
            // const accessToken = query.get("access_token");
            // const expiresIn = query.get("expires_in");
            const [, lastParams] = popup.location.href.split("?");
            const query = new URLSearchParams(lastParams);
            const code = query.get("code");
            const state = query.get("state");

            console.log(popup.location.href);
            closeDialog();
            return this.sendCode(code, state);
          }
          return this.props.onFailure(
            "OAuth redirect has occurred but no query or hash parameters were found."
          );
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  sendCode = (code, state) => {
    console.log("Send code to backend...");
    console.log(code);
    console.log(state);
  };

  render() {
    return (
      <Form.SocialBlock.Icon src={yandexIcon} onClick={this.onButtonClick} />
    );
  }
}

export default withCookies(YandexLogin);
