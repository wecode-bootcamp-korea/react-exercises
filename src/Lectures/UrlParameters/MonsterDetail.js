import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterId}`)
      .then((res) => res.json())
      .then((res) => setMonster(res));
  }, [params.monsterId]);

  const goToMonsterList = () => {
    navigate("/monsters");
  };

  const goToPrevious = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) - 1}`);
  };
  const goToNextMonster = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) + 1}`);
  };

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
            <button onClick={goToNextMonster}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MonsterDetail;
