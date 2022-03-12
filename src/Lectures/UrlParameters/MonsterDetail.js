import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const goToMonsterList = () => {
    navigate("/monsters");
  };

  const goToPrevious = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) - 1}`);
  };

  const goToNext = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) + 1}`);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterId}`)
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }, [params.monsterId]);

  return (
    <div className="urlParameters">
      {monster.name && (
        <>
          <div className="btnWrapper">
            <button onClick={goToMonsterList}>Back to Monsters List</button>
          </div>
          <Card name={monster.name} id={monster.id} email={monster.email} />
          <div className="btnWrapper">
            <button onClick={goToPrevious}>Previous</button>
            <button onClick={goToNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MonsterDetail;
