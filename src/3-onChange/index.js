import React, { Component } from "react";
import "./index.scss";

class index extends Component {
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

export default index;
