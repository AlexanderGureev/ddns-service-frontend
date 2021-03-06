import { createStore } from "easy-peasy";
import Api from "../services/api";
import model from "./model";
import Cache from "../services/cache";

const store = createStore(model, {
  injections: { Api, cache: new Cache() },
  disableImmer: true
});

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./model", () => {
      store.reconfigure(model);
    });
  }
}
export default store;
