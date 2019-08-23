import { createStore } from "easy-peasy";
import Api from "./services/api";
import model from "./model";
import Cache from "./services/cache";

export default createStore(model, {
  injections: {
    Api,
    cache: new Cache()
  }
});
