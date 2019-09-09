import { thunk, action } from "easy-peasy";

const sessionEffects = {
  registerUserAction: thunk(
    async (actions, payload, { injections: { Api }, getState }) => {
      try {
        const { key } = await Api.registrationApi(payload);
        await actions.authorizeUserAction(key);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  socialAuthorizeUserAction: thunk(
    async (actions, payload, { injections: { Api }, getState }) => {
      try {
        const { key } = await Api.sendSocialCodeApi(payload);
        await actions.authorizeUserAction(key);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  loginUserAction: thunk(
    async (actions, payload, { injections: { Api }, getState }) => {
      try {
        const { key } = await Api.loginApi(payload);
        await actions.authorizeUserAction(key);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  createOrRecoverySessionAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        const { profile, cart = [] } = cache.loadState("profile", "cart");
        if (!profile) {
          await actions.authorizeUserAction();
          return;
        }
        actions.setState({
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
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        const avatarPath = await Api.updateAvatarApi(payload);
        actions.updateProfileAction(avatarPath);
        cache.saveState("profile", getState().profile);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  authorizeUserAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        const { status = false, data = {} } = await Api.authStatusApi();
        if (status) {
          actions.setState({
            isAuth: status,
            apiToken: payload || ""
          });
          actions.updateProfileAction(data);
          cache.saveState("profile", getState().profile);
        }
      } catch (error) {
        console.log(error);
      }
    }
  ),
  logoutUserAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        await Api.logoutApi();
        actions.setState({
          isAuth: false,
          apiToken: ""
        });
        cache.clearCache();
      } catch (error) {
        console.log(error.message);
      }
    }
  ),
  confirmEmailAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        const response = await Api.confirmEmailApi(payload);
        actions.updateProfileAction(response);
        cache.saveState("profile", getState().profile);
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  ),
  resetPasswordAction: thunk(
    async (actions, payload, { injections: { Api }, getState }) => {
      try {
        await Api.resetPasswordApi(payload);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  changePasswordAction: thunk(
    async (actions, payload, { injections: { Api }, getState }) => {
      try {
        await Api.changePasswordApi(payload);
        await actions.authorizeUserAction();
      } catch (error) {
        throw new Error(error.message);
      }
    }
  ),
  addToCartAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        actions.setState({ cart: [payload] });
        cache.saveState("cart", getState().cart);
      } catch (error) {
        console.log(error.message);
      }
    }
  ),
  removeItemFromCartAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        const { cart } = getState();
        const filteredCard = cart.filter(({ id }) => id !== payload);
        actions.setState({ cart: filteredCard });
        cache.saveState("cart", filteredCard);
      } catch (error) {
        console.log(error.message);
      }
    }
  ),
  updateItemInCartAction: thunk(
    async (actions, payload, { injections: { Api, cache }, getState }) => {
      try {
        actions.setState({ cart: [payload] });
        cache.saveState("cart", getState().cart);
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
