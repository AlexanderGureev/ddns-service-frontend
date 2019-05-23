import { thunk, action } from "easy-peasy";

const sessionEffects = {
  registerUserAction: thunk(async (dispatch, payload, { injections }) => {
    try {
      const { key } = await injections.api.registrationApi(payload);
      dispatch.authorizeUserAction(key);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  socialAuthorizeUserAction: thunk(
    async (dispatch, payload, { injections }) => {
      try {
        const { key } = await injections.api.sendSocialCodeApi(payload);
        dispatch.authorizeUserAction(key);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  loginUserAction: thunk(async (dispatch, payload, { injections }) => {
    try {
      const { key } = await injections.api.loginApi(payload);
      dispatch.authorizeUserAction(key);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  createOrRecoverySessionAction: thunk(
    async (dispatch, payload, { injections }) => {
      try {
        const { profile, cart = [] } = injections.cache.loadState(
          "profile",
          "cart"
        );
        if (!profile) {
          return dispatch.authorizeUserAction();
        }
        dispatch.setState({
          profile: { ...profile },
          cart: [...cart],
          isAuth: true
        });
      } catch (error) {
        console.log(error);
      }
    }
  ),
  updateAvatarAction: thunk(
    async (dispatch, payload, { injections, getState }) => {
      try {
        const avatarPath = await injections.api.updateAvatarApi(payload);
        dispatch.updateProfileAction(avatarPath);
        injections.cache.saveState("profile", getState().profile);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  authorizeUserAction: thunk(
    async (dispatch, payload, { injections, getState }) => {
      try {
        const {
          status = false,
          data = {}
        } = await injections.api.authStatusApi();
        if (status) {
          dispatch.setState({
            isAuth: status,
            apiToken: payload || ""
          });
          dispatch.updateProfileAction(data);
          injections.cache.saveState("profile", getState().profile);
        }
      } catch (error) {
        console.log(error);
      }
    }
  ),
  logoutUserAction: thunk(async (dispatch, payload, { injections }) => {
    try {
      await injections.api.logoutApi();
      dispatch.setState({
        isAuth: false,
        apiToken: ""
      });
      injections.cache.clearCache();
    } catch (error) {
      console.log(error.message);
    }
  }),
  confirmEmailAction: thunk(
    async (dispatch, payload, { injections, getState }) => {
      try {
        const response = await injections.api.confirmEmailApi(payload);
        dispatch.updateProfileAction(response);
        injections.cache.saveState("profile", getState().profile);
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  ),
  resetPasswordAction: thunk(async (dispatch, payload, { injections }) => {
    try {
      await injections.api.resetPasswordApi(payload);
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  changePasswordAction: thunk(async (dispatch, payload, { injections }) => {
    try {
      await injections.api.changePasswordApi(payload);
      dispatch.authorizeUserAction();
    } catch (error) {
      throw new Error(error.message);
    }
  }),
  addToCartAction: thunk((dispatch, payload, { injections, getState }) => {
    try {
      dispatch.setState({ cart: [payload] });
      injections.cache.saveState("cart", getState().cart);
    } catch (error) {
      console.log(error.message);
    }
  }),
  removeItemFromCartAction: thunk(
    (dispatch, payload, { injections, getState }) => {
      try {
        const { cart } = getState();
        const filteredCard = cart.filter(({ id }) => id !== payload);
        dispatch.setState({ cart: filteredCard });
        injections.cache.saveState("cart", filteredCard);
      } catch (error) {
        console.log(error.message);
      }
    }
  ),
  updateItemInCartAction: thunk(
    (dispatch, payload, { injections, getState }) => {
      try {
        dispatch.setState({ cart: [payload] });
        injections.cache.saveState("cart", getState().cart);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
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
    cart: [],
    setState: action((state, payload) => ({ ...state, ...payload })),
    updateProfileAction: action((state, payload) => ({
      ...state,
      profile: { ...state.profile, ...payload }
    })),
    changeAuthStatusAction: action((state, payload) => ({
      ...state,
      isAuth: payload
    })),
    ...sessionEffects
  }
};
export default model;
