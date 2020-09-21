import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { coffee } = this.props;

    return (
      <div className="card-list">
        {coffee.map((el) => {
          return (
            <Card
              key={el.id}
              title={el.korean_name}
              thumbnailUrl={el.thumbnail}
              description={el.description}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
