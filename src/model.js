import { effect } from "easy-peasy";
import { authStatusApi, logoutApi } from "./services/api";

const model = {
  user: {
    profile: { email: "", username: "", firstName: "", lastName: "" },
    isAuth: false,
    updateProfileAction: (state, payload) => ({
      ...state,
      profile: { ...state.profile, ...payload }
    }),
    changeAuthStatusAction: (state, payload) => ({ ...state, isAuth: payload }),
    authorizeUserAction: effect(async (dispatch, payload, getState) => {
      try {
        const { status = false, data = {} } = await authStatusApi();
        console.log({ status, data });
        dispatch.user.changeAuthStatusAction(status);
        dispatch.user.updateProfileAction(data);
      } catch (error) {
        console.log(error);
      }
    }),
    logoutUserAction: effect(async (dispatch, payload, getState) => {
      try {
        await logoutApi();
        dispatch.user.changeAuthStatusAction(false);
      } catch (error) {
        console.log(error.message);
      }
    })
  }
};
export default model;
