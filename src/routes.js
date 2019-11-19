import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { Report } from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/report" exact={true} component={Report} />
    </Switch>
  </Router>
);

export default Routes;
