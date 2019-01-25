import axios from "axios";

// const { NODE_ENV = "development" } = process.env;

const API_URL = "https://api.shrt.zone/v1/rest-auth";

const API_URL_CSRF = "https://api.shrt.zone/";
const API_URL_REGISTRATION = `${API_URL}/registration/`;
const API_URL_USER = `${API_URL}/user/`;
const API_URL_USER_IS_AUTH = `${API_URL}/user/`;

const noop = async () =>
  new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, 2000)
  );

export const isAuth = async () => {
  try {
    const data = await axios.get(API_URL_USER_IS_AUTH);
    return true;
  } catch (error) {
    const { data = {} } = error.response;
    const errorMessage = Object.values(data);
    console.log(error.response);
    throw new Error(errorMessage);
  }
};

const getToken = async () => {
  try {
    const {
      data: { token }
    } = await axios.get(API_URL_CSRF);
    return token;
  } catch (error) {
    throw new Error("Token request error");
  }
};

export const registration = async body => {
  try {
    console.log(body);
    await noop();
    // const token = await getToken("/api/token");
    const { data, status, statusText, headers } = await axios.post(
      `${API_URL_REGISTRATION}`,
      body
    );

    if (status !== 201) {
      console.log({ data, status, statusText, headers });
      throw new Error();
    }

    console.log({ data, status, statusText, headers });
    return data;
  } catch (error) {
    const { data = {} } = error.response;
    console.log(error.response);
    // const errorMessage = Object.values(data);
    // throw new Error(errorMessage || "Ошибка загрузки данных...");
  }
};

export const user = async () => {
  try {
    const token = await getToken("/api/token");
    const { data, status, statusText, headers } = await axios.post(
      `${API_URL_USER}`,
      {
        headers: { "X-CSRFToken": `${token}` }
      }
    );

    if (status !== 200) {
      throw new Error();
    }

    console.log({ data, status, statusText, headers });
    return data;
  } catch (error) {
    throw new Error("Ошибка отправки запроса...");
  }
};
