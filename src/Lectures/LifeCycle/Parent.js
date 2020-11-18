import React, { Component } from "react";
import Child from "./Child";
import "./Parent.scss";

export default class Parent extends Component {
  constructor() {
    super();

    this.state = {
      pCount: {},
    };
  }

  componentDidMount() {
    console.log("parent CDM");
  }

  componentDidUpdate() {
    console.log("parent CDU");
  }

  render() {
    console.log("parent render");
    return (
      <div className="Parent">
        <div>
          <p>parent</p>
          <button
            onClick={() => this.setState({ pCount: this.state.pCount + 1 })}
          >
            parent plus
          </button>
        </div>
        <Child idx={1} />
        <Child idx={2} />
        <Child idx={3} />
      </div>
    );
  }
}
