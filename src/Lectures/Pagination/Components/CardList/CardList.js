import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList({ users }) {
  return (
    <div className="cardList">
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
