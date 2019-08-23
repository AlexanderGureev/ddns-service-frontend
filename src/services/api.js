import axios from "axios";
import Cookie from "js-cookie";

axios.defaults.withCredentials = true;

const API_URL = "https://api.best-service.online/users/v1/rest-auth";
const API_URL_CSRF = "https://api.best-service.online/v1/csrf";
const API_URL_REGISTRATION = `${API_URL}/registration/`;
const API_URL_LOGIN = `${API_URL}/login/`;
const API_URL_LOGOUT = `${API_URL}/logout/`;
// const API_URL_USER = `${API_URL}/user/`;
const API_URL_USER_IS_AUTH = `${API_URL}/user/`;
const API_URL_USER_EMAIL_CONFIRM = `${API_URL}/registration/verify-email/`;
const API_URL_USER_RESET_TOKEN = `${API_URL}/password/reset/`;
const API_URL_USER_CHANGE_PASSWORD = `${API_URL}/password/reset/confirm`;

const API_URL_SOCIAL_FACEBOOK = `${API_URL}/social/facebook/`;
const API_URL_SOCIAL_VK = `${API_URL}/social/vk/`;
const API_URL_SOCIAL_GOOGLE = `${API_URL}/social/google/`;
const API_URL_SOCIAL_YANDEX = `${API_URL}/social/yandex/`;

const API_URL_KEY = `${API_URL}/key/`;
export const API_URL_USER_PARTIAL_UPDATE = `${API_URL}/user/`;

const SOCIAL_LINKS = {
  facebook: API_URL_SOCIAL_FACEBOOK,
  google: API_URL_SOCIAL_GOOGLE,
  yandex: API_URL_SOCIAL_YANDEX,
  vk: API_URL_SOCIAL_VK
};

const errorParse = error => {
  if (!error.response)
    return error.message || "Request processing error, try again later.";

  const { data = null, status } = error.response;
  if (data && status !== 500 && typeof data !== "string") {
    // const errorMessage = Object.keys(data).map(key => `[${key}]: ${data[key]}`);
    // return errorMessage;
    return Object.values(data).join("\n");
  }
  return "Request processing error, try again later.";
};

const authStatusApi = async () => {
  try {
    const { data } = await axios.get(API_URL_USER_IS_AUTH);

    return {
      status: true,
      data: {
        email: data.email,
        username: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
        avatarPath: data.personal.avatar,
        emailConfirm: data.email_verified,
        provider: data.provider
      }
    };
  } catch (error) {
    return false;
  }
};

const getCSRFTokenApi = async () => {
  try {
    const token = Cookie.get("csrftoken");
    if (token) return token;

    await axios.get(API_URL_CSRF);
    return Cookie.get("csrftoken");
  } catch (error) {
    throw new Error("Token request error.");
  }
};

const getTokenApi = async () => {
  try {
    const { data, status, statusText } = await axios({
      method: "GET",
      url: API_URL_KEY
    });
    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }
    console.log(data);
  } catch (error) {
    throw new Error("Token request error.");
  }
};
const registrationApi = async body => {
  try {
    const { data, status, statusText } = await axios.post(
      API_URL_REGISTRATION,
      body
    );

    if (status !== 201) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(errorParse(error));
  }
};

const loginApi = async body => {
  try {
    const { data, status, statusText } = await axios.post(API_URL_LOGIN, body);

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }
    console.log({ data });
    return data;
  } catch (error) {
    throw new Error(errorParse(error));
  }
};

const logoutApi = async () => {
  try {
    const token = await getCSRFTokenApi();
    const { status, statusText } = await axios({
      method: "post",
      url: API_URL_LOGOUT,
      headers: { "X-CSRFToken": token }
    });

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }
  } catch (error) {
    throw new Error(errorParse(error));
  }
};

const updateAvatarApi = async formData => {
  try {
    const token = await getCSRFTokenApi();
    const { data, status } = await axios({
      method: "PATCH",
      url: API_URL_USER_PARTIAL_UPDATE,
      headers: {
        "X-CSRFToken": token,
        "content-type": "multipart/form-data"
      },
      data: formData
    });
    if (status !== 200) {
      throw new Error("Uploading failed");
    }
    return { avatarPath: data.personal.avatar };
  } catch (error) {
    throw new Error(errorParse(error));
  }
};
// const user = async () => {
//   try {
//     const token = await getTokenApi();

//     const {
//       data: {
//         email,
//         username,
//         first_name: firstName,
//         last_name: lastName,
//         avatar_path: avatarPath,
//         email_verified: emailConfirm
//       },
//       status,
//       statusText
//     } = await axios({
//       method: "post",
//       url: API_URL_LOGOUT,
//       headers: { "X-CSRFToken": token }
//     });

//     if (status !== 200) {
//       throw new Error(
//         `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
//       );
//     }

//     return {
//       email,
//       username,
//       firstName,
//       lastName,
//       avatarPath,
//       emailConfirm
//     };
//   } catch (error) {
//     throw new Error("Ошибка отправки запроса...");
//   }
// };

const sendSocialCodeApi = async ({ provider, code, state }) => {
  try {
    const { data, status, statusText } = await axios({
      method: "post",
      url: SOCIAL_LINKS[provider],
      headers: { "X-CSRFToken": state },
      data: { code }
    });

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return data;
  } catch (error) {
    console.log({ error });
    throw new Error(errorParse(error));
  }
};

const confirmEmailApi = async code => {
  try {
    const token = await getCSRFTokenApi();

    const { status, statusText } = await axios({
      method: "post",
      url: API_URL_USER_EMAIL_CONFIRM,
      headers: { "X-CSRFToken": token },
      data: { key: code }
    });

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return { emailConfirm: true };
  } catch (error) {
    throw new Error(errorParse(error));
  }
};
const resetPasswordApi = async body => {
  try {
    const token = await getCSRFTokenApi();

    const { status, statusText } = await axios({
      method: "post",
      url: API_URL_USER_RESET_TOKEN,
      headers: { "X-CSRFToken": token },
      data: body
    });

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }
  } catch (error) {
    throw new Error(errorParse(error));
  }
};
const changePasswordApi = async body => {
  try {
    const token = await getCSRFTokenApi();

    const { status, statusText } = await axios({
      method: "post",
      url: API_URL_USER_CHANGE_PASSWORD,
      headers: { "X-CSRFToken": token },
      data: body
    });

    if (status !== 201) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }
  } catch (error) {
    throw new Error(errorParse(error));
  }
};
export default {
  authStatusApi,
  logoutApi,
  registrationApi,
  loginApi,
  confirmEmailApi,
  resetPasswordApi,
  changePasswordApi,
  sendSocialCodeApi,
  getCSRFTokenApi,
  getTokenApi,
  updateAvatarApi
};
