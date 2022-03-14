import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  // console.log(params); //{monsterId: '5'}

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterId}`)
      .then((res) => res.json(res))
      // .then((res) => console.log(res));
      .then((res) => setMonster(res));
  }, [params.monsterId]);

  const goToMonsterList = () => {
    navigate("/monsters");
  };

  const goToPriviousMonster = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) - 1}`);
  };

  const goToNextMonster = () => {
    navigate(`/monsters/detail/${Number(params.monsterId) + 1}`);
  };
  // 버튼을 눌렀을 때, 변경되는 것은 url 밖에는 없고
  // 버튼을 누르면 url이 변경 -> 그 url이 변경되는 것을 useEffect에서 바라보고 있다가
  // url이 변경되면 다시 fetch를 받고, 그 결과값을 다시 setMonster로 저장하고
  // 업데이트된 state가 발생하면 함수형 컴포넌트가 다시 재실행되고
  // 업데이트된 state를 이용해서 UI를 그려줌

  return (
    <div className="urlParameters">
      {/* monster.name이 존재할 때만 조건부 렌더링을 통해 화면에 보여줌 */}
      {monster.name && (
        <>
          <div className="btnWrapper">
            <button onClick={goToMonsterList}>Back to Monsters List</button>
          </div>
          <Card name={monster.name} id={monster.id} email={monster.email} />
          <div className="btnWrapper">
            <button onClick={goToPriviousMonster}>Previous</button>
            <button onClick={goToNextMonster}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MonsterDetail;
