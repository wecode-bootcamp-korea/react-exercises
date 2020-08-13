import React, { Component } from "react";
import "./StateProps.scss";

class StateProps extends Component {
  constructor() {
    super();
    this.state = {
      hi: "hi",
      data;[],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // fetch("https://jsonplaceholder.typicode.com/users")
      // .then((response) => console.log(response))
      .then((response) => {
        response.json();
      .then((json)=> this.setState({data:json}))
      });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div className="state">
        <div className="state-header">State / Props 연습!!</div>
        <div className="state-contents">CONTENTS</div>
        <button onClick={() => this.setState({ hi: "ho" })}>ho</button>
      </div>
    );
  }
}

export default StateProps;
