import React from 'react'
import './card.css'

function Card({ monster}) {    //We are getting monster prop from CardList component
    return (
      <div className="card-container ">
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
        {/*Pass individual monster into Card component.   */}
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          
      </div>
    );
}

export default Card
