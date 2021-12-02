import React, { useState } from "react";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});

  return (
    <div className="urlParameters">
      <div className="btnWrapper">
        <button>Back to Monsters List</button>
      </div>
      <Card />
      <div className="btnWrapper">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default MonsterDetail;
