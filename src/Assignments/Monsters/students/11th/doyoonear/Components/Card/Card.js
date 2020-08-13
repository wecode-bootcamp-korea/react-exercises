import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${this.props.mons.id}?set=set2&size=180x180`}
          alt=""
        />
        <h2>{this.props.mons.name}</h2>
        <p>{this.props.mons.email}</p>
      </div>
    );
  }
}

export default Card;
