import React, { Component } from "react";
import "./OnChange.scss";

class OnChange extends Component {
  render() {
    return (
      <div className="onchange-wrapper">
        <div className="top">
          email: <input />
          password: <input />
          <button>SUBMIT</button>
        </div>
        <div className="contents">
          <div>email</div>
          <div>password</div>
        </div>
      </div>
    );
  }
}

export default OnChange;
