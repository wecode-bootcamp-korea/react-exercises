import React, { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");



  const handlers = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const serch = data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()) // 해당 함수가 실행 됨에도 불구하고 기본값이 false인데 처음에 모든 몬스터들이 다 화면에 나옴
  ); // includes 는 array 메소드 () 안의 값이 배열에 존재하면 true 존재하지 않으면 false 를 출력해준다.


  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={inputValue}
        onChange={handlers}
      />
      <CardList serch={serch}/>
    </div>
  );
}


// function CardList({ monsterList }) {
//   return (
//     <div className="cardList">
//       {monsterList.map((monster) => (
//         <Card key={monster.id} monster={monster} />
//       ))}
//     </div>
//   );
// }


export default Monsters;
