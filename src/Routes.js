import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UrlParameters from "./Lectures/UrlParameters/Monsters";
import MonsterDetail from "./Lectures/UrlParameters/MonsterDetail";
import StateProps from "./Lectures/StateProps/StateProps";
import OnChange from "./Lectures/OnChange/OnChange";
import MenuTab from "./Lectures/MenuTab/MenuTab";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/StateProps" component={StateProps} />
          <Route exact path="/onChange" component={OnChange} />
          <Route exact path="/MenuTab" component={MenuTab} />
          <Route exact path="/UrlParameters" component={UrlParameters} />
        </Switch>
      </Router>
    );
  }
}
