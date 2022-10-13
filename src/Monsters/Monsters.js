import React, { useState, useEffect } from 'react';
import './Monsters.scss';
import CardList from './CardList.js';

function Monsters() {
  //인풋창에 타이핑된 글자
  const [inputWord,setFilter]=useState('');
  function inputOnchange(e){
    setFilter(e.target.value)
  }
  //api로 받아온 데이터 -> 몬스터스테이트
  const [monsterState, setMonsterState] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMonsterState(data);
      });
  }, []);

  function submitFunction(){

    fetch('api주소',{
      method:"post",
      headers:{
      'Content-Type':
      'application/json;charset=utf-8',
      },
      body:JSON.stringify({
      id:"hellofdfas@naver.com",
      pw:123455
      })
      
      }).then((response) => response.json())
      .then((data) => console.log(data));
      
  }

  //로그인실습
  return (
    <>

    <div className="monsters">
      <h2>Monster!!!!!!!!!!</h2>
      <input className="search" placeholder="Search" onChange={inputOnchange} />
    </div>

      <div className="monsterCards">
      <CardList monsterState={monsterState} inputWord={inputWord}/>
      </div>

    </>
  );
}

export default Monsters;

//여기서 fetch fetch() → 호출할 API 주소: https://jsonplaceholder.typicode.com/users
