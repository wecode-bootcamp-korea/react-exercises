import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  render() {
    return (
      <div className="url-parameters">
        <div className="btn-wrapper">
          <button>Back to Monsters List</button>
        </div>
        <Card id={1} name="승현 손" email="james@gracefulrain.co" />
        <div className="btn-wrapper">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;
