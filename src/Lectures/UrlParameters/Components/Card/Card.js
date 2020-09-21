import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Card.scss";

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card-container"
        onClick={() =>
          this.props.history.push(`/monsters/detail/${this.props.id}`)
        }
      >
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

export default withRouter(Card);
