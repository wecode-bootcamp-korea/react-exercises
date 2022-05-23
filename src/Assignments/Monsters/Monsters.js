import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

/**********************************************************
  API 주소: https://jsonplaceholder.typicode.com/users

  1. 위 주소를 호출하여 데이터 로딩을 처리해주세요!
    - useEffect()
    - fetch
    - setState (monsters 에 저장)


  2. SearchBox 컴포넌트에 정의한 handleChange 메소드를 넘겨주고, 
     호출 시 인자로 들어오는 이벤트객체(e)를 활용해 userInput 으로 setState.

  3. 필터링 로직 구현 (filter 메소드 활용)
      여기서 비교 대상은 monster 객체의 name 값입니다.
      소문자로 바꾼 monster.name 값과 userInput값을 비교.
      filter 메소드가 반환하는 값을 변수에 저장 후 return 문 안에 CardList에 props로 전달
***********************************************************/

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //fetch가 다 일어난 후 then메서드 활용해서, 받은 string형태의 json response를 js의 객체화로 변환
      .then((result) => setMonsters(result)); //변환된 값을 setMonsters에 저장
  }, []); //데이터 패치를 렌더링이 일어나고 단 한번만 진행. 그래서 두번째 인자를 빈배열로 둠

  // 데이터 로딩

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의
  // 먼저 fetch로 조회해서 state에 저장, 그리고 검색기능에 값이 들어오면 조회해서 보여줌

  const userSearchInput = (e) => {
    setUserInput(e.target.value);
    e.preventDefault();
  };

  /*   const getMonster = monsters.filter((monster) => {
    if (userInput === "") {
      return monsters;
    } else if (userInput === monster.name) {
      return monster.name.toLowerCase().includes(userInput.toLowerCase());
    }
  }); */

  /*   const getMonster = monsters.filter((monster) => {
    if (userInput === monster.name) {
      return monster.name.toLowerCase().includes(userInput.toLowerCase());
    } else if (userInput === "") {
      return monsters;
    }
  });
 */
  const getMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={userSearchInput} />
      <CardList monsters={getMonster} />
      {/*const[monster, setMonsters]에서 monsters의 상태값을 전달! 그러면 10개의 요소가 담신긴 배열이 전달*/}
    </div>
  );
}

export default Monsters;
