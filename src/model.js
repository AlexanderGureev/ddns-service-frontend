import { effect } from "easy-peasy";

const sessionEffects = {
  registerUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.registrationApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  socialAuthorizeUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.sendSocialCodeApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  loginUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.loginApi(payload);
      dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  createOrRecoverySessionAction: effect(
    async (dispatch, payload, _, { cache }) => {
      try {
        const cachedState = cache.loadState();
        if (!cachedState) {
          return dispatch.session.authorizeUserAction();
        }
        dispatch.session.changeAuthStatusAction(true);
        dispatch.session.updateProfileAction(cachedState);
      } catch (error) {
        console.log(error);
      }
    }
  ),
  authorizeUserAction: effect(
    async (dispatch, payload, getState, { api, cache }) => {
      try {
        const { status = false, data = {} } = await api.authStatusApi();
        if (status) {
          dispatch.session.changeAuthStatusAction(status);
          dispatch.session.updateProfileAction(data);
          cache.saveState(getState().session.profile);
        }
      } catch (error) {
        console.log(error);
      }
    }
  ),
  logoutUserAction: effect(async (dispatch, payload, _, { api, cache }) => {
    try {
      await api.logoutApi();
      dispatch.session.changeAuthStatusAction(false);
      cache.clearCache();
    } catch (error) {
      console.log(error.message);
    }
  }),
  confirmEmailAction: effect(
    async (dispatch, payload, getState, { api, cache }) => {
      try {
        const response = await api.confirmEmailApi(payload);
        dispatch.session.updateProfileAction(response);
        cache.saveState(getState().session.profile);
      } catch (error) {
        console.log(error.message);
        throw new Error("Email verification failed.");
      }
    }
  ),
  resetPasswordAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.resetPasswordApi(payload);
      // dispatch.session.authorizeUserAction();
    } catch (error) {
      throw new Error(error.message);
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
    ...sessionEffects
  }
};
export default model;
