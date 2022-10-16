import React, { useEffect, useState } from "react"
import "./Monsters.scss"
import CardList from "./components/CardList/CardList"

function Monsters() {
  const [monsterList, setMonsterList] = useState([])
  const [search, setSearch] = useState("")

  const searchMonster = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data))
  }, [])
  console.log(monsterList)
  console.log(search)
  const filterMonster = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  )
  console.log(filterMonster)
  return (
    <div className='monsters'>
      <h1 className='title'>Monsters</h1>
      <input
        className='search'
        placeholder='몬스터 검색'
        value={search}
        onChange={searchMonster}
      />
      <CardList monsterList={filterMonster} />
    </div>
  )
}

export default Monsters
