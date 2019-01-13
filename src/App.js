import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Managed from "./components/Managed";

import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/" component={Auth} />
        <Route path="/managed/" component={Managed} />
      </Switch>
    </Router>
  );
};

export default App;
