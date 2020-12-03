import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";
import HomeCard from "../components/Layout/HomeCard.js";

 
function Home () {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
        // console.log("testing... working")
      };
      function handleFormSubmit(event) {
        event.preventDefault();
        console.log("running?");
        // if (formObject.city1 && formObject.city2 ) {
            API.getFlight({
                city1: formObject.city1,
                city2: formObject.city2,
                outboundDate: formObject.outboundDate
            })
            .then(res => {
                console.log("FS", res.data)
                let price = res.data.Quotes.map( quote => quote)
                console.log("price", price)
                let airports = res.data.Places.map( ap => ap)
                console.log("airports", airports)
                let carriers = res.data.Carriers.map(c => c)
                console.log("carriers", carriers)
                setFlightState({
                    //departure date is res.data.Quotes[0].OutboundLeg.DepartureDate
                     price,
                    airports,
                    carriers
                })
            })
            .catch(err => console.log(err));
        // }
        API.getFlight({
            city1: formObject.city1,
            city2: formObject.city2,
            outboundDate: formObject.outboundDate
        })
        .then(res => {
            console.log("FSV2", res.data)
        })
        .catch(err => console.log(err));
    // }
      };
    return (
        <div>
            <SearchContainer 
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            />
            {/*
                I recommend moving this ternary from the card layout wrapper to each individual cards rendering.
            */}
            {(flightState.price) ? (<CardLayout 
            flightState = {flightState}
            />) : <HomeCard />}
            
        </div>
    )
}

export default Home;