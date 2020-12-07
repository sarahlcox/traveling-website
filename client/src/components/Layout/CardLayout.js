import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import EmptyCard from '../Layout/EmptyCard';
import './cardlayout.css';

function CardLayout (props) {
return (
    <div className="card-cont">
        <CardDeck>
            {(props.flightState.Quotes) ? 
            <Flights flightInfo = {props.flightState} /> : <EmptyCard info={"Flight"}/>}
            {(props.newsState.state) ? 
            <Headlines newsInfo = {props.newsState} /> : <EmptyCard info={"News"}/>}        
        </CardDeck>
        <CardDeck>
            {(props.hotelState[0]) ? 
            <Hotels hotelInfo = {props.hotelState} /> : <EmptyCard info={"Hotel"}/>}
            {(props.attractionState[0]) ? 
            <Attractions attractionInfo = {props.attractionState} /> : <EmptyCard info={"Attractions"}/>}
        </CardDeck>
</div>
)
    
}

export default CardLayout;