import React, { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./ActiveTab.scss";

const obj = {
  0: <First />,
  1: <Second />,
  2: <Third />,
};

export default class ActiveTab extends Component {
  state = {
    activeId: 0,
  };

  clickHandler = (id) => {
    this.setState({ activeId: id });
  };

  render() {
    console.log(this.state);

    return (
      <div className="wrapper">
        <ul className="tabs">
          <li onClick={() => this.clickHandler(0)}>First</li>
          <li onClick={() => this.clickHandler(1)}>Second</li>
          <li onClick={() => this.clickHandler(2)}>Third</li>
        </ul>
        <div className="contents">{obj[this.state.activeId]}</div>
      </div>
    );
  }
}
