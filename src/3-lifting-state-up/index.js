import React, { Component } from "react";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";
import "./index.scss";

class index extends Component {
  state = {
    num: 0
  };

  // addHandler

  // subtractHandler

  render() {
    return (
      <div className="lifting-state-up-parent">
        <div className="top">나는 부모</div>
        <div className="bottom">
          <FirstChild />
          <SecondChild num={this.state.num} />
        </div>
      </div>
    );
  }
}

export default index;
