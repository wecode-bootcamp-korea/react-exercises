import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlParameters from "./Lectures/UrlParameters/Monsters";
import MonsterDetail from "./Lectures/UrlParameters/MonsterDetail";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/UrlParameters" component={UrlParameters} />
          <Route exact path="/UrlParameters/:id" component={MonsterDetail} />
        </Switch>
      </Router>
    );
  }
}
