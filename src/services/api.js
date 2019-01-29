import axios from "axios";
import Cookie from "js-cookie";

axios.defaults.withCredentials = true;

const API_URL = "https://accounts.best-service.online/v1/rest-auth";
const API_URL_CSRF = "https://accounts.best-service.online/v1/csrf";
const API_URL_REGISTRATION = `${API_URL}/registration/`;
const API_URL_LOGIN = `${API_URL}/login/`;
const API_URL_LOGOUT = `${API_URL}/logout/`;
const API_URL_SOCIAL_LINKS = `${API_URL}/social/login/links/`;
const API_URL_USER = `${API_URL}/user/`;
const API_URL_USER_IS_AUTH = `${API_URL}/user/`;
const API_URL_USER_EMAIL_CONFIRM = `${API_URL}/registration/verify-email/`;

const errorParse = error => {
  if (!error.response)
    return error.message || "Request processing error, try again later.";

  const { data = null, status } = error.response;
  if (data && status !== 500) {
    return Object.values(data).join("\n");
  }
  return "Request processing error, try again later.";
};

export const authStatusApi = async () => {
  try {
    const {
      data: {
        email,
        username,
        first_name: firstName,
        last_name: lastName,
        avatar_path: avatarPath,
        email_verified: emailConfirm
      }
    } = await axios.get(API_URL_USER_IS_AUTH);

    return {
      status: true,
      data: {
        email,
        username,
        firstName,
        lastName,
        avatarPath,
        emailConfirm
      }
    };
  } catch (error) {
    return false;
  }
};

export const getTokenApi = async () => {
  try {
    return await axios.get(API_URL_CSRF);
  } catch (error) {
    throw new Error("Token request error.");
  }
};

export const registrationApi = async body => {
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

export const loginApi = async body => {
  try {
    const { data, status, statusText } = await axios.post(API_URL_LOGIN, body);

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(errorParse(error));
  }
};

export const logoutApi = async () => {
  try {
    const token = Cookie.get("csrftoken");
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

export const getSocialIdApi = async () => {
  try {
    const { data, status, statusText } = await axios.get(API_URL_SOCIAL_LINKS);

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(errorParse(error));
  }
};

export const user = async () => {
  try {
    const token = Cookie.get("csrftoken");

    const {
      data: {
        email,
        username,
        first_name: firstName,
        last_name: lastName,
        avatar_path: avatarPath,
        email_verified: emailConfirm
      },
      status,
      statusText
    } = await axios({
      method: "post",
      url: API_URL_LOGOUT,
      headers: { "X-CSRFToken": token }
    });

    if (status !== 200) {
      throw new Error(
        `Request processing error, try again later. Status: ${status}, Status text: ${statusText}`
      );
    }

    return {
      email,
      username,
      firstName,
      lastName,
      avatarPath,
      emailConfirm
    };
  } catch (error) {
    throw new Error("Ошибка отправки запроса...");
  }
};

export const sendSocialCodeApi = async (code, state) => {
  try {
    const { data, status, statusText } = await axios({
      method: "post",
      url: API_URL_USER,
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
    throw new Error("Ошибка отправки запроса...");
  }
};

export const confirmEmailApi = async code => {
  try {
    const token = Cookie.get("csrftoken");

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
    throw new Error("Ошибка отправки запроса...");
  }
};
