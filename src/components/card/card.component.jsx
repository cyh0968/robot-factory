import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        {console.log(props)}
        <img alt='robot' src={`https://robohash.org/${props.robot.id}?set=set1&size=180x180`}></img>
        <h2> {props.robot.name} </h2>
        <p> {props.robot.email} </p>
    </div>
);
