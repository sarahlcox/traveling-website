import React, { Component } from "react";
import { Card, Accordion, } from 'react-bootstrap';

function formatDate(date) {
    const formatedDate = date.split("T");
    // console.log("new date", formatedDate)
    return formatedDate[0]
}
function getCarrier(carrierID, getID){
   let directCarrier = getID.filter(carrier => {
       if (carrier.CarrierId = carrierID){
           return carrier
       }
   })
   return directCarrier[0].Name
}
function getAp(placeID, getID){
    console.log(getID)
    let place = getID.filter(place =>{
        if(place.PlaceId = placeID){
            return place
        }
    })
    console.log(place)
    return place.Name
}
function printDirectPrice(prices, carrierIds, airports) {
    let directPrice = prices.filter(price => {
        // console.log("price", price)
        return price.Direct == true
    })
    console.log("should be direct",directPrice)
    return (
        <div>
         <p>Price: $ {directPrice[0].MinPrice}</p>
         <p>Date: {formatDate(directPrice[0].OutboundLeg.DepartureDate)}</p>
         <p>Airline: {getCarrier(directPrice[0].OutboundLeg.CarrierIds, carrierIds)}</p>
         <p>Departure Airport: {getAp(directPrice[0].OutboundLeg.OriginId, airports)}</p>
         <p>Arrival Airport: {getAp(directPrice[0].OutboundLeg.DestinationId, airports)}</p>
         </div>
    )
}
function Flights(props) {
    console.log("card test", props.flightInfo)
    return (
        <Card className="single-card" >
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            {/* {(props.flightInfo.price) ? 
                    props.flightInfo.price[0].MinPrice : "No flights meet your search criteria"} */}
            <Card.Body>
                <Card.Title>Flights</Card.Title>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Direct
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{printDirectPrice(props.flightInfo.Quotes, props.flightInfo.Carriers, props.placesState)}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Indirect
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* <Card.Text> */}
                {/* {console.log("card test",props.flightInfo.price)} */}
                {/* Min Price: ${props.flightInfo.price[0].MinPrice} */}
                {/* </Card.Text> */}
                {/* <Card.Text> */}
                {/* Flight Date: {formatDate(props.flightInfo.price[0].OutboundLeg.DepartureDate)} */}
                {/* </Card.Text> */}
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )

}

export default Flights;