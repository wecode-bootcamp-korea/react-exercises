import React from 'react';
import './Monsters.scss';

function CardList(props){
    let monsterArray = props.monsterState;
    // console.log(monsterArray)
    // console.log(Array.isArray(monsterArray));
    let inputWord = props.inputWord;

    // console.log(inputWord)
    // console.log(monsterArray)

    //필터링된 애들만 모은 새로운 배열 만들기...필터는 대소문자 구분을 안한다.. includes는 배열,스트링 전부 사용 가능..
    const filteredMonster = monsterArray.filter(monster => monster.name.toLowerCase().includes(inputWord.toLowerCase()));

    // console.log(filteredMonster)

    function Card(props){
         return(
         <div className="card-container">
         <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="monster" className="monsterIMG"/>
         <h2>{props.name}</h2>
         <h4>{props.email}</h4>
        </div>);
    }


    return(<>
    {filteredMonster.map((item)=>{
        return(
        <Card key={item.id} id={item.id} name={item.name} email={item.email}/>
        )
    })}</>
    )
        
    }
    
    export default CardList;



