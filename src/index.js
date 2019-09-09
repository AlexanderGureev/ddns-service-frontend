import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";

import "./index.css";

import store from "./store";
import App from "./components/App";

//ReactDOM.render(<App />, document.getElementById("root"));

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>,
    document.getElementById("root")
  );

render(App);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./components/App", () => {
      render(App);
    });
  }
}
