import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import './cardlayout.css';

// import "./style.css";
class CardLayout extends Component {
    // Setting the component's initial state
    state = {

    };
    render() {
        return (
            <div className="card-cont">
                <CardDeck>
                    <Flights />
                    <Headlines />
                </CardDeck>
                <CardDeck>
                    <Hotels />
                    <Attractions />
                </CardDeck>
        </div>
        )
    }
}

export default CardLayout;