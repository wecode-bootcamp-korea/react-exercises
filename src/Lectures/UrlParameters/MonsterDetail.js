import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    user: {}
  };

  render() {
    return (
      <div className="url-parameters">
        <Card id={1} name="손승현" email="sonsh@gracefulrain.co" />
        <div className="btn-wrapper">
          <button onClick={() => console.log("PREVIOUS")}>Previous</button>
          <button onClick={() => console.log("NEXT")}>Next</button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;
