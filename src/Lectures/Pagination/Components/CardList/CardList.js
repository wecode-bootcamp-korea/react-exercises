import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.scss';

class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-list">
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              profileImage={user.profile_img}
              email={user.email}
              phoneNumber={user.phone_number}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
