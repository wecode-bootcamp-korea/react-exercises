import React, { useState, useEffect } from 'react';
import './Monsters.scss';
import CardList from './CardList.js';

function Monsters() {

  const [inputWord,setFilter]=useState('');
  function inputOnchange(e){
    setFilter(e.target.value)
  }

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
