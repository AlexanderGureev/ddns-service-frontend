import { effect } from "easy-peasy";

const sessionEffects = {
  registerUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      const { key } = await api.registrationApi(payload);
      dispatch.session.authorizeUserAction(key);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  socialAuthorizeUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      const { key } = await api.sendSocialCodeApi(payload);
      dispatch.session.authorizeUserAction(key);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  loginUserAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      const { key } = await api.loginApi(payload);
      dispatch.session.authorizeUserAction(key);
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
  updateAvatarAction: effect(
    async (dispatch, payload, getState, { api, cache }) => {
      try {
        const avatarPath = await api.updateAvatarApi(payload);
        dispatch.session.updateProfileAction(avatarPath);
        cache.saveState(getState().session.profile);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  authorizeUserAction: effect(
    async (dispatch, payload, getState, { api, cache }) => {
      try {
        const { status = false, data = {} } = await api.authStatusApi();
        if (status) {
          dispatch.session.setState({
            isAuth: status,
            apiToken: payload || ""
          });
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
      dispatch.session.setState({ isAuth: false, apiToken: "" });
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
        throw new Error(error.message);
      }
    }
  ),
  resetPasswordAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.resetPasswordApi(payload);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  changePasswordAction: effect(async (dispatch, payload, _, { api }) => {
    try {
      await api.changePasswordApi(payload);
      dispatch.session.authorizeUserAction();
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
      emailConfirm: false,
      avatarPath: "",
      provider: ""
    },
    apiToken: "",
    isAuth: false,
    setState: (state, payload) => ({ ...state, ...payload }),
    updateProfileAction: (state, payload) => ({
      ...state,
      profile: { ...state.profile, ...payload }
    }),
    changeAuthStatusAction: (state, payload) => ({ ...state, isAuth: payload }),
    ...sessionEffects
  }
};
export default model;
