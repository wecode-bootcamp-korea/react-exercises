import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.scss';

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monsters) => {
          return (
            <Card key={monsters.id} id={monsters.id} name={monsters.name} email={monsters.email} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
