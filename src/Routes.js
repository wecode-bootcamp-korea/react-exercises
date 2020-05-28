import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Monsters from "./1-monsters/App";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/monsters" component={Monsters} />
        </Switch>
      </Router>
    );
  }
}
