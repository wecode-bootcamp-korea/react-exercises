import React from "react"
import Card from "../Card/Card"
import "./CardList.scss"

const CardList = (props) => {
  console.log(props)
  return (
    <div className='cardList'>
      {props.monsterList.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}
export default CardList
