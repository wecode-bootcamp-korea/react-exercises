import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(monster => {
          return (
            <Card
              key={monster.id}
              id={monster.id}
              name={monster.name}
              email={monster.email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
