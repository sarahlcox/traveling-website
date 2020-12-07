import React, { Component } from "react";
import { Card, Accordion, } from 'react-bootstrap';

function formatDate(date) {
    const formatedDate = date.split("T");
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
function getSC(placeID, getID){
    let place = getID.filter(place =>{
        if(place.PlaceId == placeID){
            return place
        }
    })
    return place[0].SkyscannerCode
}
function getSCU(placeID1,placeID2, getID, date){
    let city1= getSC(placeID1, getID);
    let city2= getSC(placeID2, getID);
    let urlDate= formatDate(date)
    let scURL= "https://www.skyscanner.com/transport/flights/"  + city1 + "/" + city2 + "/"+urlDate+"/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&qp_prevCurrency=USD&qp_prevPrice=40&qp_prevProvider=ins_browse&rtn=0";
    return scURL

}
function getAp(placeID, getID){
    let place = getID.filter(place =>{
        if(place.PlaceId == placeID){
            return place
        }
    })
    return place[0].Name
}
function printDirectPrice(prices, carrierIds, airports) {
    let directPrice = prices.filter(price => {
        return price.Direct == true
    })
    if(directPrice[0]){
    return (
        <div>
         <p>Price: ${directPrice[0].MinPrice}</p>
         <p>Date: {formatDate(directPrice[0].OutboundLeg.DepartureDate)}</p>
         <p>Airline: {getCarrier(directPrice[0].OutboundLeg.CarrierIds, carrierIds)}</p>
         <p>Departure Airport: {getAp(directPrice[0].OutboundLeg.OriginId, airports)}</p>
         <p>Arrival Airport: {getAp(directPrice[0].OutboundLeg.DestinationId, airports)}</p>
         <p><a href = {getSCU(directPrice[0].OutboundLeg.OriginId,directPrice[0].OutboundLeg.DestinationId, airports, directPrice[0].OutboundLeg.DepartureDate)} target="_blank"> Book Flight</a></p>
         </div>
    )}
    else{
        return(
            <div>
                 <h4>No Direct Flights</h4>
            </div>
        )
    }
}
function printIndirectPrice(prices, carrierIds, airports) {
    let indirectPrice = prices.filter(price => {
        return price.Direct == false
    })
    if(indirectPrice[0]){
    return (
        <div>
         <p>Price: ${indirectPrice[0].MinPrice}</p>
         <p>Date: {formatDate(indirectPrice[0].OutboundLeg.DepartureDate)}</p>
         <p>Airline: {getCarrier(indirectPrice[0].OutboundLeg.CarrierIds, carrierIds)}</p>
         <p>Departure Airport: {getAp(indirectPrice[0].OutboundLeg.OriginId, airports)}</p>
         <p>Arrival Airport: {getAp(indirectPrice[0].OutboundLeg.DestinationId, airports)}</p>
         <p><a href = {getSCU(indirectPrice[0].OutboundLeg.OriginId,indirectPrice[0].OutboundLeg.DestinationId, airports, indirectPrice[0].OutboundLeg.DepartureDate)} target="_blank"> Book Flight</a></p>
         </div>
    )}
    else{
        return(
            <div>
                <h4>No Indirect Flights</h4>
            </div>
        )
    }
}
function Flights(props) {
    return (
        <Card className="single-card" >
            <Card.Body>
                <Card.Title>Flights</Card.Title>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Direct
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{printDirectPrice(props.flightInfo.Quotes, props.flightInfo.Carriers, props.flightInfo.Places)}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Indirect
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>{printIndirectPrice(props.flightInfo.Quotes, props.flightInfo.Carriers, props.flightInfo.Places)}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card.Body>
        </Card>
    )

}

export default Flights;