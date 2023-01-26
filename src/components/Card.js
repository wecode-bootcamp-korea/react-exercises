import React from 'react'
import './Card.scss'

function Card({ monster }) {
   const { name, email, id } = monster

   return (
      <div className="card">
         <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt="monster"
            className="monsterImg"
         />
         <h2 className="name">{name}</h2>
         <p className="email">{email}</p>
      </div>
   )
}

export default Card
