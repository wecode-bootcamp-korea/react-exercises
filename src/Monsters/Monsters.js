import React, { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  // 몬스터 데이터를 담을 배열
  const [searchValue, setSearchValue] = useState("");
  // 검색창에 들어가는 값을 관리해주는 state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsterList(data));
  }, []);
  // 데이터를 가져와서 setMonsterList에 data로 담아줌
  // monsterList 배열에 담아진 것임

  const handlerSearch = (e) => {
    setSearchValue(e.target.value);
  };
  // searchValue 에 담아줄 값을 정해줌 (input태그의 value 값)
  // input 태그에 onChange 를 이 함수로 걸어줌
  // 검색창 값이 실시간으로 setSearchValue(->searchValue)로 담아지는 것을 만든것

  const filteredItem = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  // 검색한 내용이 포함된 몬스터데이터의 name 값 (구분을 쉽게하기 위해 다 소문자로 바꿔주는 메서드 사용! toLowerCase())

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={searchValue}
        onChange={handlerSearch}
      />
      <CardList monsterList={filteredItem} />
    </div>
  );
}

export default Monsters;
