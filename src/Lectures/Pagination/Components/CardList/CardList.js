import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { photos } = this.props;

    return (
      <div className="card-list">
        {photos.map((photo) => {
          return (
            <Card
              key={photo.id}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
