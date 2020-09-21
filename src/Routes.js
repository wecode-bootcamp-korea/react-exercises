import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Monsters from "./Assignments/Monsters/Monsters";
import Pagination from "./Lectures/Pagination/Coffee";
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
          <Route exact path="/" component={Monsters} />
          <Route exact path="/StateProps" component={StateProps} />
          <Route exact path="/onChange" component={OnChange} />
          <Route exact path="/MenuTab" component={MenuTab} />
          <Route exact path="/monsters" component={UrlParameters} />
          <Route exact path="/monsters/detail/" component={MonsterDetail} />
          <Route exact path="/monsters/detail/:id" component={MonsterDetail} />
          <Route exact path="/Pagination" component={Pagination} />
        </Switch>
      </Router>
    );
  }
}
