import React, { Component } from "react";

export default class FetchError extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch("/lifecycle.json")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ data: res });
      });
  }

  render() {
    console.log(this.state.data.message);
    return (
      <div>
        {this.state.data.message.map(msg => {
          return <li>{msg}</li>;
        })}
      </div>
    );
  }
}
