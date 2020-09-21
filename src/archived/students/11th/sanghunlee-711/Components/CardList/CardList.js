import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {

  render() { 
    return(
    <div className="card-list">
          {this.props.monsters.map(({ id, name, email }) => <Card id={id} name={name} email={email} /> )}
    </div>
    )
  }
}

export default CardList;

