import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

export default function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);

  const handleCard = (id) => {
    navigate(`/monsters/detail/${id}`);
  };

  return (
    <div className="monsters">
      <h1>Mini Project - Monsters</h1>
      <SearchBox />
      <CardList monsters={monsters} handleCard={handleCard} />
    </div>
  );
}
