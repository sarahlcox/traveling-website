import React from "react";
import { Card, Accordion } from "react-bootstrap";
import API from "../../utils/API";
import Headlines from '../Headlines/headlines.js';
import Flights from '../Flights/flights.js';
import Hotels from '../Hotels/hotels.js';
import Attractions from '../Attractions/attractions.js';
import EmptyCard from "../Layout/EmptyCard"


function SavedSearch(props) {
    const searchObj = props.search;

    // const [flightInfo, setFlightInfo] = React.useState({Intial: "Start"})
    // const [hotelInfo, setHotelInfo] = React.useState([])
    // const [newsInfo, setNewsInfo] = React.useState([])
    // const [attractionInfo, setAttractionInfo] = React.useState([])
    
    // // format date function 
    // function formatDate(date) {
    //     let splitDate = date.split("/")
    //     splitDate.reverse()
    //     let formatedDate = splitDate.join("-");
    //     return formatedDate
    // }

    // // change flight info state function 
    // function changeflightInfo(data) {
    //     setFlightInfo(
    //         {
    //             ...flightInfo,
    //             Quotes: data.data.Quotes,
    //             Carriers: data.data.Carriers,
    //             Places: data.data.Places,
    //             Intial: "Called"
    //         }
    //     );
    // }

    // if (props.search) {
    //     API.getFlight({
    //         city1: searchObj.city1,
    //         city2: searchObj.city2,
    //         outboundDate: formatDate(searchObj.outboundDate)
    //     })
    //         .then(res => {
    //             changeflightInfo(res);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             setFlightInfo({ error: "N/A" })
    //         });


    //     //get covid info
    //     API.getState(searchObj.stateCode)
    //         .then(res => {
    //             setNewsInfo(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             setNewsInfo(["N/A"])
    //         });
    //     // get hotels info
    //     API.getHotels({ city2: searchObj.city2 }).then(response => {
    //         response.data.sort((a, b) => b.starRating - a.starRating);
    //         const hotelsList = response.data
    //             .slice(0, 10).map(hotel => {
    //                 const hotelObject = {
    //                     name: hotel.name,
    //                     star: hotel.starRating,
    //                     image: hotel.thumbnailUrl,
    //                     price: (hotel.ratePlan) ? hotel.ratePlan.price.current : "N/A"
    //                 }
    //                 return hotelObject;
    //             });
    //         setHotelInfo(hotelsList);
    //     }).catch(err => {
    //         console.log(err)
    //         setHotelInfo(["N/A"])
    //     }
    //     );

    //     // get attraction info
    //     API.getAttractions(searchObj.city2)
    //         .then(response => {
    //             const attractionsList = response.data
    //             setAttractionInfo(attractionsList);
    //         }).catch(err => {
    //             console.log(err)
    //             setAttractionInfo(["N/A"])
    //         }
    //         );
    // }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Saved Search Details</Card.Title>
                {(!props.search) ? (
                    <Card.Text>
                        Choose a saved entry to see the details
                    </Card.Text>
                ) :
                (
                    <Accordion defaultActiveKey="">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Flights
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            {(props.flightInfo.Quotes) ? 
            <Flights flightInfo = {props.flightInfo} /> : null }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            COVID-19
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            {(props.newsInfo.state) ? 
            <Headlines newsInfo = {props.newsInfo} /> : null}  
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Hotels
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            {(props.hotelInfo[0]) ? 
                (props.hotelInfo[0] != "N/A")?
                    <Hotels hotelInfo = {props.hotelInfo} /> : <EmptyCard info={"Hotel"}/>
             : null}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Attractions
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            {(props.attractionInfo[0]) ? 
                (props.attractionInfo[0] != "N/A")?
                    <Attractions attractionInfo = {props.attractionInfo} /> : <EmptyCard info={"Attractions"}/>
             : null}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                )}
            </Card.Body>
        </Card>
    )
}

export default SavedSearch;