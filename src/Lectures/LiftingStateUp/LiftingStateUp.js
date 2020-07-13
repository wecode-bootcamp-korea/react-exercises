import React, { Component } from "react";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";
import "./LiftingStateUp.scss";

class LiftingStateUp extends Component {
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

export default LiftingStateUp;
