import React from 'react';
import './card-list.style.css';
import Card  from '../card/card.component';

//Children are passed inside components
//Props are passed as properties created on components
export const Cardlist = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    );
}