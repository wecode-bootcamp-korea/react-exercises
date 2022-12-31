import { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [inputValue, setInputValue] = useState("");
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" onChange={handleInput} />
      <CardList inputValue={inputValue} monsterList={monsterList} />
    </div>
  );
}

export default Monsters;
