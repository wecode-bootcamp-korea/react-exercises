import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Users.scss";

const LIMIT = 20;

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // 데이터 로딩
  useEffect(() => {
    fetch(
      `http://localhost:8000/users${
        location.search || `?limit=${LIMIT}&offset=0`
      }`
    )
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, [location.search]);

  const updateOffset = (buttonIndex) => {
    const offset = buttonIndex * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;

    navigate(queryString);
  };

  return (
    <div className="photos">
      <h1>Mini Project - Pagination</h1>
      <Buttons updateOffset={updateOffset} />
      <CardList users={users} />
    </div>
  );
}
