import React, { Component } from "react";
import Card from "../2-monsters/components/Card/Card";
import "./index.scss";

class index extends Component {
  state = {
    user: {}
  };

  componentDidMount() {}

  render() {
    return (
      <div className="url-parameters">
        <Card id={1} name="James" email="hello@gmail.com" />
        <div className="btn-wrapper">
          <button onClick={() => console.log("PREVIOUS")}>Previous</button>
          <button onClick={() => console.log("NEXT")}>Next</button>
        </div>
      </div>
    );
  }
}

export default index;
