import React from "react";
import "./Card.scss";

export default function Card({ id, name, profileImage, email, phoneNumber }) {
  return (
    <div className="cardContainer">
      <img src={profileImage} alt={profileImage} />
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}
