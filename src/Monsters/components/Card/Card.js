import React from 'react'
import './Card.scss'

const Card = ({monsterCard}) => {
    const { name, email, id } = monsterCard

    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;