import React, { Component } from "react";
import "./OnChange.scss";

class OnChange extends Component {
  state = {
    email: "",
    password: "",
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="onchange-wrapper">
        <div className="top">
          email: <input name="email" onChange={this.inputHandler} />
          password: <input name="password" onChange={this.inputHandler} />
          <button>SUBMIT</button>
        </div>
        <div className="contents">
          <div>{this.state.email}</div>
          <div>{this.state.password}</div>
        </div>
      </div>
    );
  }
}

export default OnChange;
