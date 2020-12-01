import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
// import "./style.css";
function Flights(props){

    return (
            <Card className="single-card" >
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                <Card.Title>Flights</Card.Title>
                <Card.Text>
                   {console.log("card test",props.flightInfo.flightData.price[0].MinPrice)}
                  Min Price: ${props.flightInfo.flightData.price[0].MinPrice}
                </Card.Text>
                <Card.Text>
                  Flight Date: {props.flightInfo.flightData.price[0].OutboundLeg.DepartureDate}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    )
    
}

export default Flights;