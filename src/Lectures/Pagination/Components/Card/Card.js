import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { id, name, profileImage, email, phoneNumber } = this.props;
    return (
      <div className="card-container">
        <img src={profileImage} alt={profileImage} />
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    );
  }
}

export default Card;
