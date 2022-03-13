import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const gotoList = () => {
    navigate('/monsters/');
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterId}`)
      .then((res) => res.json())
      .then((res) => setMonster(res));
  }, [params.monsterId]);

  const gotoPrevious = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) - 1}`);
  }
  const gotoNext = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) + 1}`);

  }

  return (
    <div className="urlParameters">
      {monster.name && (
        <>
          <div className="btnWrapper">
            <button onClick={gotoList}>Back to Monsters List</button>
          </div>
          <Card name={monster.name} id={monster.id} email={monster.email} />
          <div className="btnWrapper">
            <button onClick={gotoPrevious}>Previous</button>
            <button onClick={gotoNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MonsterDetail;
