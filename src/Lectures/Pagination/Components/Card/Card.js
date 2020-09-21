import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.thumbnailUrl} alt="" />
        <p>{this.props.title}</p>
        <p dangerouslySetInnerHTML={{ __html: this.props.description }} />
      </div>
    );
  }
}

export default Card;
