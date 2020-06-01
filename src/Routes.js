import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Monsters from "./1-monsters";
import ActiveTab from "./2-active-tab";
import LiftingStateUp from "./3-lifting-state-up";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/monsters" component={Monsters} />
          <Route exact path="/active-tab" component={ActiveTab} />
          <Route exact path="/lifting-state-up" component={LiftingStateUp} />
        </Switch>
      </Router>
    );
  }
}
