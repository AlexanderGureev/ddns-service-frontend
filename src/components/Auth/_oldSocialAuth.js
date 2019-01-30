// import React, { useEffect } from "react";
// import { Form } from "./styles";

// const FacebookLogin = ({ onFailure, onSuccess }) => {
//   useEffect(() => {
//     facebookOAuth2Init();
//   }, []);

//   const facebookOAuth2Init = () => {
//     const script = document.createElement("script");
//     script.src = "https://connect.facebook.net/en_US/sdk.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", facebookApiInit);
//   };

//   const facebookApiInit = () => {
//     const { FB } = window;
//     FB.init(
//       {
//         appId: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
//         version: "v3.2"
//       },
//       { scope: "public_profile,email" }
//     );
//   };

//   const facebookLogout = () => {
//     const { FB } = window;
//     FB.logout(response => {
//       console.log({ response });
//     });
//   };

//   const fbSignIn = e => {
//     const { FB } = window;
//     FB.login(response => {
//       console.log({ response });
//     });
//   };

//   return <Form.SocialBlock.Icon src={facebookIcon} onClick={fbSignIn} />;
// };

// export default FacebookLogin;

// import React, { useEffect } from "react";
// import { Form } from "./styles";

// const GoogleLogin = ({ onFailure, onSuccess }) => {
//   useEffect(() => {
//     googleOAuth2Init();
//   }, []);

//   const googleOAuth2Init = () => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/client.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", gapiInit);
//   };

//   const gapiInit = () => {
//     const { gapi } = window;
//     gapi.load("auth2", () => {
//       gapi.auth2
//         .init({
//           client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
//         })
//         .then(
//           () => {
//             console.log("GoogleAuth success initialize!");
//           },
//           error => {
//             console.log(error);
//           }
//         );
//     });
//   };

//   const googleSignIn = e => {
//     const { gapi } = window;

//     const success = user => console.log(user);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signIn({
//       scope: "profile email"
//     }).then(success, failure);
//   };

//   const googleLogout = e => {
//     const { gapi } = window;

//     const success = data => console.log(data);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signOut().then(success, failure);
//   };

//   return <Form.SocialBlock.Icon src={googleIcon} onClick={googleSignIn} />;
// };

// export default GoogleLogin;

// import React, { useEffect } from "react";
// import { Form } from "./styles";

// const VkLogin = ({ onFailure, onSuccess }) => {
//   useEffect(() => {
//     vkOAuth2Init();
//   }, []);

//   const vkOAuth2Init = () => {
//     const script = document.createElement("script");
//     script.src = "https://vk.com/js/api/openapi.js?160";
//     document.body.appendChild(script);

//     script.addEventListener("load", vkApiInit);
//   };

//   const vkApiInit = () => {
//     const { VK } = window;
//     VK.init({
//       apiId: process.env.REACT_APP_VK_CLIENT_ID
//     });
//   };

//   const vkSignIn = e => {
//     const { VK } = window;
//     VK.Auth.login(data => {
//       console.log({ data });
//     });
//   };

//   const vkLogout = e => {
//     window.VK.Auth.logout(data => {
//       console.log({ data });
//     });
//   };

//   return <Form.SocialBlock.Icon src={vkIcon} onClick={vkSignIn} />;
// };

// export default VkLogin;
// import React, { useEffect } from "react";
// import { Form } from "./styles";

// const GoogleLogin = ({ onFailure, onSuccess }) => {
//   useEffect(() => {
//     googleOAuth2Init();
//   }, []);

//   const googleOAuth2Init = () => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/client.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", gapiInit);
//   };

//   const gapiInit = () => {
//     const { gapi } = window;
//     gapi.load("auth2", () => {
//       gapi.auth2
//         .init({
//           client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
//         })
//         .then(
//           () => {
//             console.log("GoogleAuth success initialize!");
//           },
//           error => {
//             console.log(error);
//           }
//         );
//     });
//   };

//   const googleSignIn = e => {
//     const { gapi } = window;

//     const success = user => console.log(user);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signIn({
//       scope: "profile email"
//     }).then(success, failure);
//   };

//   const googleLogout = e => {
//     const { gapi } = window;

//     const success = data => console.log(data);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signOut().then(success, failure);
//   };

//   return <Form.SocialBlock.Icon src={googleIcon} onClick={googleSignIn} />;
// };

// export default GoogleLogin;

// import React, { useEffect } from "react";
// import { Form } from "./styles";

// const GoogleLogin = ({ onFailure, onSuccess }) => {
//   useEffect(() => {
//     googleOAuth2Init();
//   }, []);

//   const googleOAuth2Init = () => {
//     const script = document.createElement("script");
//     script.src = "https://apis.google.com/js/client.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", gapiInit);
//   };

//   const gapiInit = () => {
//     const { gapi } = window;
//     gapi.load("auth2", () => {
//       gapi.auth2
//         .init({
//           client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
//         })
//         .then(
//           () => {
//             console.log("GoogleAuth success initialize!");
//           },
//           error => {
//             console.log(error);
//           }
//         );
//     });
//   };

//   const googleSignIn = e => {
//     const { gapi } = window;

//     const success = user => console.log(user);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signIn({
//       scope: "profile email"
//     }).then(success, failure);
//   };

//   const googleLogout = e => {
//     const { gapi } = window;

//     const success = data => console.log(data);
//     const failure = error => console.log(error);

//     const GoogleAuth = gapi.auth2.getAuthInstance();
//     GoogleAuth.signOut().then(success, failure);
//   };

//   return <Form.SocialBlock.Icon src={googleIcon} onClick={googleSignIn} />;
// };

// export default GoogleLogin;
