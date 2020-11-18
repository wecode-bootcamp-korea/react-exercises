import React, { Component } from "react";
import Parent from "./Parent";
import FetchError from "./FetchError";
import "./index.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        {/* <Parent /> */}
        <FetchError />
      </div>
    );
  }
}
