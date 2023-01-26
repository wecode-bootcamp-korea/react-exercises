import React, { useEffect, useState } from 'react'
import './Monsters.scss'
import CardList from '../components/CardList'

function Monsters() {
   const [monsterList, setMonsterList] = useState([])
   const [searchKeyword, setSearchKeyword] = useState('')

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((result) => result.json())
         .then((data) => setMonsterList(data))
   }, [])

   const monsterSearch = (event) => {
      setSearchKeyword(event.target.value)
   }

   const filteredItem = monsterList.filter((monster) =>
      monster.name.toLowerCase().includes(searchKeyword.toLowerCase()),
   )
   return (
      <div className="monsters">
         <h1 className="title">Monsters</h1>
         <input
            className="search"
            placeholder="Search"
            value={searchKeyword}
            onChange={monsterSearch}
         />
         <div className="monsterWrapper">
            <CardList monsterList={filteredItem} />
         </div>
      </div>
   )
}

export default Monsters
