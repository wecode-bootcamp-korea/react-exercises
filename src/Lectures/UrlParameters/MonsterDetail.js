import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [monster, setMonster] = useState({});
  const [id, setId] = useState(params.id);

  useEffect(() => {
    navigate(`/monsters/detail/${id}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setMonster(res));
  }, [id]);

  const goToPrev = () => {
    setId((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const goToNext = () => {
    setId((prev) => {
      if (prev < 10) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="urlParameters">
      <div className="btnWrapper">
        <button
          onClick={() => {
            navigate("/monsters");
          }}
        >
          Back to Monsters List
        </button>
      </div>
      <Card
        key={monster.id}
        id={monster.id}
        name={monster.name}
        email={monster.email}
      />
      <div className="btnWrapper">
        <button onClick={goToPrev}>Previous</button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
}

export default MonsterDetail;
