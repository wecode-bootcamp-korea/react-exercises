import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monsterCard) => (
          <Card key={monsterCard.id} monster={monsterCard} />
        ))}
      </div>
    );
  }
}

export default CardList;
