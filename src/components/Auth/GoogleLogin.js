import React, { useEffect } from "react";
import { Form } from "./styles";
import googleIcon from "./img/soc-google.svg";

const GoogleLogin = ({ onFailure, onSuccess }) => {
  useEffect(() => {
    googleOAuth2Init();
  }, []);

  const googleOAuth2Init = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    document.body.appendChild(script);

    script.addEventListener("load", gapiInit);
  };

  const gapiInit = () => {
    const { gapi } = window;
    gapi.load("auth2", () => {
      gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        })
        .then(
          () => {
            console.log("GoogleAuth success initialize!");
          },
          error => {
            console.log(error);
          }
        );
    });
  };

  const googleSignIn = e => {
    const { gapi } = window;

    const success = user => console.log(user);
    const failure = error => console.log(error);

    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: "profile email"
    }).then(success, failure);
  };

  const googleLogout = e => {
    const { gapi } = window;

    const success = data => console.log(data);
    const failure = error => console.log(error);

    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(success, failure);
  };

  return <Form.SocialBlock.Icon src={googleIcon} onClick={googleSignIn} />;
};

export default GoogleLogin;
