import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
          alt=""
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
