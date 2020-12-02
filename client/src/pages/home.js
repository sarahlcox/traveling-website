import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";
import HomeCard from "../components/Layout/HomeCard.js";

 
function Home () {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({
        flightData: {}
    })
    const [hotelState, setHotelState] = React.useState({
        hotelsData: []
    })

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
                // console.log("FS", res.data)
                setFlightState({...flightState, flightData: {
                    //departure date is res.data.Quotes[0].OutboundLeg.DepartureDate
                    price: res.data.Quotes,
                    airports: res.data.Places,
                    carriers: res.data.Carriers
                    
                } })
            })
            .catch(err => console.log(err));
        // }
        API.getHotels({city2: formObject.city2}).then(response => {
            response.data.sort((a,b) => b.starRating - a.starRating);
            const hotelsList = response.data
                .slice(0, 10).map(hotel => {
                    return {
                        name: hotel.name,
                        star: hotel.starRating,
                        image: hotel.thumbnailUrl,
                        price: hotel.ratePlan.price.current
                    }
                });
            setHotelState({...hotelState, hotelsData: hotelsList});
        }).catch(err => console.log(err));
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
            {(flightState.flightData.price) ? (<CardLayout 
            flightState = {flightState}
            hotelState = {hotelState}
            />) : <HomeCard />}
            
        </div>
    )
}

export default Home;