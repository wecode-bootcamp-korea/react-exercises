import React, { Component } from "react";
import Card from "../Card/Card"
import "./CardList.scss";

class CardList extends Component {
  render() {
    return (<div className="card-list">
      {this.props.monsters.map((el)=> {
        return (
          <Card key={el.username}
          id={el.id}
          name={el.name}
          email={el.email}
          />
        )
      })}
    </div>
    );
  
  }
}

export default CardList;

