import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import EmptyCard from '../Layout/EmptyCard';
import './cardlayout.css';

// import "./style.css";
function CardLayout (props) {
// if(props.flightState.flightData.price){
//    console.log( "card Props", props.flightState.flightData.price)}
return (
    <div className="card-cont">
        <CardDeck>
            {(props.flightState.flightData.price) ? 
            <Flights flightInfo = {props.flightState} /> : <EmptyCard info={"Flight"}/>}
            <Headlines />
        </CardDeck>
        <CardDeck>
            {(props.hotelState[0]) ? 
            <Hotels hotelInfo = {props.hotelState} /> : <EmptyCard info={"Hotel"}/>}
            <Attractions />
        </CardDeck>
</div>
)
    
}

export default CardLayout;