import { createStore } from "easy-peasy";
import api from "./services/api";
import model from "./model";
import Cache from "./services/cache";

export default createStore(model, {
  injections: {
    api,
    cache: new Cache()
  }
});
