import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Users.scss";

const LIMIT = 20;
//limit은 여러 곳에서 사용되므로 -> 나중의 유지보수를 위해 상수 데이터로 컴포넌트 밖에서 선언!

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  //{pathname: '/pagination', search: '?limit=20&offset=40', hash: '', state: null, key: 'r53bbzun'}

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
