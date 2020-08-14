import React, { Component } from "react";

class StatePropsChild extends Component {
  render() {
    return <div>{this.props.score}</div>;
  }
}

export default StatePropsChild;
