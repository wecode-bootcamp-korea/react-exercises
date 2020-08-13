import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          id = {this.props.id}
          name = {this.props.name}
          email = {this.props.email}
          src= {`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
          alt="itmightbeWeirdIMG"
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
