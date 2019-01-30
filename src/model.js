import { effect } from "easy-peasy";
import {
  authStatusApi,
  logoutApi,
  registrationApi,
  loginApi,
  confirmEmailApi,
  resetPasswordApi,
  sendSocialCodeApi
} from "./services/api";

const effects = {
  registerUserAction: effect(async (dispatch, payload) => {
    try {
      await registrationApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error);
    }
  }),
  socialAuthorizeUserAction: effect(async (dispatch, payload) => {
    try {
      await sendSocialCodeApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error);
    }
  }),
  loginUserAction: effect(async (dispatch, payload) => {
    try {
      await loginApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error);
    }
  }),
  authorizeUserAction: effect(async (dispatch, payload, getState) => {
    try {
      const { status = false, data = {} } = await authStatusApi();
      dispatch.session.changeAuthStatusAction(status);
      dispatch.session.updateProfileAction(data);
    } catch (error) {
      console.log(error);
    }
  }),
  logoutUserAction: effect(async (dispatch, payload, getState) => {
    try {
      await logoutApi();
      dispatch.session.changeAuthStatusAction(false);
    } catch (error) {
      console.log(error.message);
    }
  }),
  confirmEmailAction: effect(async (dispatch, payload, getState) => {
    try {
      const response = await confirmEmailApi(payload);
      dispatch.session.updateProfileAction(response);
    } catch (error) {
      console.log(error.message);
      throw new Error("Email verification failed.");
    }
  }),
  resetPasswordAction: effect(async (dispatch, payload, getState) => {
    try {
      await resetPasswordApi(payload);
    } catch (error) {
      console.log(error);
    }
  })
};

const model = {
  session: {
    profile: {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      emailConfirm: false
    },
    isAuth: false,
    updateProfileAction: (state, payload) => ({
      ...state,
      profile: { ...state.profile, ...payload }
    }),
    changeAuthStatusAction: (state, payload) => ({ ...state, isAuth: payload }),
    ...effects
  }
};
export default model;
