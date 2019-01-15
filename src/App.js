import "antd/dist/antd.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import Managed from "./components/Managed"
import ChangePassword from "./components/Auth/ChangePassword"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/" component={Auth} />
      <Route path="/password/change" component={ChangePassword} />
      <Route path="/managed/" component={Managed} />
    </Switch>
  </Router>
)

export default App
