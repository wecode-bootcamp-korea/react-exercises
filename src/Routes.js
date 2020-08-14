import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlParameters from "./Lectures/UrlParameters/Monsters";
import StateProps from "./Lectures/StateProps/StateProps";
import MonsterDetail from "./Lectures/UrlParameters/MonsterDetail";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/StateProps" component={StateProps} />
          <Route exact path="/UrlParameters" component={UrlParameters} />
        </Switch>
      </Router>
    );
  }
}
