import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img
          src={`https://robohash.org/${this.props.contents.id}?set=set2&size=180x180`}
          alt=""
        />
        <h2>{this.props.contents.name}</h2>
        <p>{this.props.contents.email}</p>
      </div>
    );
  }
}

export default Card;
