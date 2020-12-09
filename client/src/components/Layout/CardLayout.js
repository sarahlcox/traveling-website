import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import EmptyCard from '../Layout/EmptyCard';
import HomeCard from "./HomeCard"
import './cardlayout.css';

// import "./style.css";
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
                (props.hotelState[0] != "N/A")?
                    <Hotels hotelInfo = {props.hotelState} /> : <EmptyCard info={"Hotel"}/>
            : <HomeCard info={"Hotel"}/>}
            {(props.attractionState[0]) ? 
            <Attractions attractionInfo = {props.attractionState} /> : <EmptyCard info={"Attractions"}/>}
        </CardDeck>
</div>
)
    
}

export default CardLayout;