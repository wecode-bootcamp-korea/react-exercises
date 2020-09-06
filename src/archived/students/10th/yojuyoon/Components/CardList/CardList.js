import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster, index) => {
          return (
            <Card
              id={monster.id}
              key={index}
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
