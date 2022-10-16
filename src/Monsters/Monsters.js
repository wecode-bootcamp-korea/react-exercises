import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './Monsters.scss';

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  const monsterSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredItem = monsterList.filter((monster) => monster.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        value={searchKeyword}
        placeholder="Search"
        onChange={monsterSearch}
      />
      <CardList monsterList={filteredItem} />
    </div>
  );
}

export default Monsters;
