import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        {this.props.monsters.map((monster) => {
          return <Card contents={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
