import React from "react";

function MonsterLists({ m }) {
  return (
    <div className="monsterList">
      {m.map((m) => (
        <div className="monsterCard" key={m.id}>
          <img
            className="img"
            src={`https://robohash.org/${m.id}?set=set2&size=180x180`}
            alt="monster{m.id}"
          />
          <div className="monsterName">{m.name}</div>
          <div className="monsterEmail">{m.email}</div>
        </div>
      ))}
    </div>
  );
}
export default MonsterLists;
