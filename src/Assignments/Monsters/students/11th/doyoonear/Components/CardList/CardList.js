import React, { Component } from "react";
// import Monsters from "../../Monsters";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    return <div className="card-list">
      {this.props.filtered.map
        ((obj) => <Card mons={obj} /> )}
    </div>;
  }
}

export default CardList;
