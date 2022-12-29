import React, { useEffect, useState } from 'react';
import './Monsters.scss';
// 검색기능
// input 태그에 onChange 속성으로 바뀔때마다 값 전달하기
// 전달된값을 필터로 확인해서, input에 입력된 값과 일치하는 정보만 가져오기 
// useState를 사용해서 input 값 관리하기
// filter 사용해서 데이터 거르고 보여주기
// filter 된 데이터들을 어디에 사용해야할까 -> map에다가 filter링된 요소들만 렌더링 해줌 
function Monsters() {
  const [searchInput, setSearchInput] = useState("");
  const [monster, setMonster] = useState([]);

  const onChangeMode = (event) => {
    setSearchInput(event.target.value);
  }

  const monsterFilter = monster.filter((monsters) => 
    monsters.name.toLowerCase().includes(searchInput.toLowerCase())
    ); // 저장된 데이터 더미에서 객체에 name키를 가진 value들을 소문자들로 바꾸어줌. 그리고 검색한 단어들도
    // 소문자로 바꿔서 저장된 더미 객체의 값이 검색어를 포함하고 있다면 monsterFilter에 통과된 값들만 모아서
    // 새로운 배열을 반환 함.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonster(data)) // data를 어떻게 가져올까? -> setState에다가 할당해서 state로 관리
  },[])

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input 
      name='monsterInput'
      className="search" 
      placeholder="Search"
      value={searchInput} 
      onChange={onChangeMode}
      />
      <div className='monsterCardList'>
        {
          monsterFilter.map((monsterCardList, i) => {
            return(
            <div className="monsterCards" key={monsterCardList.id}>
              <img className="monsterImage" src={`https://robohash.org/${i}?set=set2&size=180x180`} alt="몬스터사진들"/>
              <p>{monsterCardList.name}</p>
              <p>
                {monsterCardList.email}
              </p>
            </div>
              )
          })
        }
      </div>
    </div>
  );
}

export default Monsters;
