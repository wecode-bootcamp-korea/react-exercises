import React, { useState } from "react"
import "./Monsters.scss"

function Monsters() {
  const [monsterList, setMonsterList] = useState([])

  return (
    <div className='monsters'>
      <h1 className='title'>Monsters</h1>
      <input className='search' placeholder='Search' />
    </div>
  )
}

export default Monsters
