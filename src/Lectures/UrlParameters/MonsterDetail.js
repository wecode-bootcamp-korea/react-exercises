import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import { useParams, useNavigate } from "react-router-dom";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.monstersId}`)
      .then((res) => res.json())
      .then((res) => setMonster(res));
  }, [params.monstersId]);
  //컴포넌트가 마운트 된 뒤에 실행된다.
  // setMonster 가 이루어지면서
  // 다시 새롭게 펫칭된 데이터로 렌더링 되는것
  // 몬스터 정보가 들어오지 않았을 때를 생각해보기 !
  // 의존성 배열에 URL 을 넣어주고 이용!

  const goToMonsterList = () => {
    navigate("/monsters");
  };

  const goToPreviousMonster = () => {
    navigate(`/monsters/detail/${params.monstersId - 1}`);
  };
  const goToNextMonster = () => {
    navigate(`/monsters/detail/${Number(params.monstersId) + 1}`);
  };

  return (
    <div className="urlParameters">
      {monster.name && (
        <>
          <div className="btnWrapper">
            <button onClick={goToMonsterList}>Back to Monsters List</button>
          </div>
          <Card name={monster.name} id={monster.id} eamil={monster.email} />
          <div className="btnWrapper">
            <button onClick={goToPreviousMonster}>Previous</button>
            <button onClick={goToNextMonster}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MonsterDetail;

// useparam 에 따른 데이터를 펫칭하고,
// 그에 따라 달라진 데이터들을 Card로 props 를 통해 전달해서,
// 결론적으로 보여주고싶은 카드만 보여주자!
