import React, { useEffect, useState } from 'react';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardList/CardList';
import './Monsters.scss';

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
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);
  // useEffect(() => {
  //   if (userInput.trim().length === 0) {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setMonsters(data);
  //       });
  //   }
  // }, []);

  // 데이터 로딩

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의
  // array를 filter 하는데 조건이 searchbox의 인풋값. 인풋값 state에 저장해야함.

  let copy = [...monsters];
  copy = monsters.filter((monster) => monster.name.toUpperCase().includes(userInput));

  function handleChange(e) {
    setUserInput(e.target.value.toUpperCase());
  }

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} />
      <CardList monsters={copy} />
    </div>
  );
}

export default Monsters;
