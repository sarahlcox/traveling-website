import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import './cardlayout.css';

// import "./style.css";
function CardLayout (props) {

   
return (
    <div className="card-cont">
        <CardDeck>
            <Flights flightInfo = {props.flightState} />
            <Headlines />
        </CardDeck>
        <CardDeck>
            <Hotels />
            <Attractions />
        </CardDeck>
</div>
)
    
}

export default CardLayout;