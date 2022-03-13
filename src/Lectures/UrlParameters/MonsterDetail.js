import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((res) => setMonster(res));
  }, [params.id]);

  const goToMonstersList = () => {
    navigate("/monsters/");
  };

  const goToPrevious = () => {
    navigate(`/monsters/detail/${parseInt(params.id) - 1}`);
  };

  const goToNext = () => {
    navigate(`/monsters/detail/${parseInt(params.id) + 1}`);
  };

  return (
    <div className="urlParameters">
      <div className="btnWrapper">
        <button onClick={goToMonstersList}>Back to Monsters List</button>
      </div>
      {monster.id && (
        <Card id={monster.id} name={monster.name} email={monster.email} />
      )}
      <div className="btnWrapper">
        {monster.id > 1 && <button onClick={goToPrevious}>Previous</button>}
        {monster.id < 10 && <button onClick={goToNext}>Next</button>}
      </div>
    </div>
  );
}

export default MonsterDetail;
