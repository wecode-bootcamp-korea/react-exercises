import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlParameters from "./Lectures/UrlParameters/Monsters";
import MonsterDetail from "./Lectures/UrlParameters/MonsterDetail";
import StateProps from "./Lectures/StateProps/StateProps";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/UrlParameters" component={UrlParameters} />
          <Route exact path="/StateProps" component={StateProps} />
        </Switch>
      </Router>
    );
  }
}
