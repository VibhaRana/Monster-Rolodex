import React from "react";
import Card from "../card/Card"
import "./cardList.css";

function CardList({monsters}) {      //we are getting monsters prop from App components

  return (
    <div className="card-list">
          {monsters.map(monster => (
            <Card
              //props, we will destructure these props in card component
              key={monster.id}
              monster={monster}/>
      ))}
    </div>
  );
}

export default CardList;
