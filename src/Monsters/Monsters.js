import React, { useEffect, useState } from "react";
import First from "../components/First";
import "./Monsters.scss";

//[1,2,3,4,5].filter(x => x > 3); // [4,5]

function Monsters() {
  const [MonsterInfo, setMonsterList] = useState([]);
  const [MonsterLook, setMonsterLook] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);
  const search = (e) => {
    setMonsterLook(e.target.value);
  };

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        onChange={search}
        value={MonsterLook}
        className="search"
        placeholder="Search"
      />

      <div>
        <p>{MonsterInfo.name}</p>
      </div>
      <div className="monsterContainer">
        {MonsterInfo.filter((call) => call.name.includes(MonsterLook)).map(
          (monster) => {
            return <First monster={monster} key={monster.id} />;
          }
        )}
      </div>
    </div>
  );
}
export default Monsters;
