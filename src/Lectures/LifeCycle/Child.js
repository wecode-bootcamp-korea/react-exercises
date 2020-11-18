import React, { Component } from "react";
import "./Child.scss";

export default class Child extends Component {
  constructor() {
    super();

    this.state = {
      cCount: {},
    };
  }

  componentDidMount() {
    console.log(this.props.idx + " child CDM");
  }

  componentDidUpdate() {
    console.log(this.props.idx + " child CDU");
  }

  render() {
    console.log(this.props.idx + " child render");
    return (
      <div className="Child">
        <div>
          <p>Child!</p>
          <button
            onClick={() => this.setState({ cCount: this.state.cCount + 1 })}
          >
            child plus
          </button>
        </div>
      </div>
    );
  }
}
