import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './Monsters.scss';

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => setMonsterList(data));
  }, []);

  const initSearch = () => {
    setSearchKeyword('');
  };

  const searchMonster = e => {
    setSearchKeyword(e.target.value);
  };

  const filteredItem = monsterList.filter(monster =>
    monster.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return (
    <div className="monsters">
      <button onClick={initSearch}>
        <h1 className="title">Monsters</h1>
      </button>
      <input
        className="search"
        placeholder="Search"
        onChange={searchMonster}
        value={searchKeyword}
      />
      <CardList monsterListArray={filteredItem} />
    </div>
  );
}

export default Monsters;
