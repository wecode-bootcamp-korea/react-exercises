import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => res.json())
    .then(res => setMonster(res))
  }, [params.id])

  const goPrev = () => {
    navigate(`/monsters/detail/${Number(params.id) - 1}`);
  }

  const goNext = () => {
    navigate(`/monsters/detail/${Number(params.id) + 1}`);
  }

  return (
    <div className="urlParameters">
      { monster && <>
        <div className="btnWrapper">
          <Link to='/monsters'><button>Back to Monsters List</button></Link>
        </div>
        <Card name={monster.name} id={monster.id} email={monster.email}/>
        <div className="btnWrapper">
          <button onClick={goPrev}>Previous</button>
          <button onClick={goNext}>Next</button>
        </div>
      </>}
    </div>
  );
}

export default MonsterDetail;
