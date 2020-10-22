import React, { Component } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

class MonsterDetail extends Component {
  state = {
    data: {},
  };
  render() {
    return (
      <div className="url-parameters">
        <div className="btn-wrapper">
          <button>Back to Monsters List</button>
        </div>
        <Card />
        <div className="btn-wrapper">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default MonsterDetail;
