import React, { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

class MenuTab extends Component {
  constructor() {
    super();
    this.state = {
      currentIdx: 1,
    };
  }

  clickHandler = (idx) => {
    console.log(idx);
    this.setState({ currentIdx: idx });
  };

  render() {
    return (
      <div className="wrapper">
        <ul className="tabs">
          {CATEGORY_ARR.map((el, idx) => {
            return (
              <li key={el} onClick={() => this.clickHandler(idx + 1)}>
                {el}
              </li>
            );
          })}
        </ul>
        <div className="contents">{MAPPING_OBJ[this.state.currentIdx]}</div>
      </div>
    );
  }
}

export default MenuTab;

export const CATEGORY_ARR = ["First", "Second", "Third"];

const MAPPING_OBJ = {
  1: <First />,
  2: <Second />,
  3: <Third />,
};
