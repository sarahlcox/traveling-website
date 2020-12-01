import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API"

 
function Home () {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({})
    const [hotelState, setHotelState] = React.useState({
        hotelsData: []
    })

    React.useEffect(()=>{
        //make state and pass the state instead of city names & date
        API.getFlight({
            city1: "Chicago",
            city2: "New York",
            outboundDate: "test"
        }).then(res =>{
            console.log("FE res", res)
        })

        API.getHotels({city2: "New York"}).then(resHotels => {
            console.log("Hotels res", resHotels);
        })
    },[])
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
        console.log("testing... working")
    };
    function handleFormSubmit(event) {
        event.preventDefault();
        // if (formObject.city1 && formObject.city2 ) {
            API.getFlight({
                city1: formObject.city1,
                city2: "New York",
                outboundDate: "test"
            })
            .then(res => {
                console.log("FS", res.data)
                setFlightState({...flightState, flightData: {
                    price: res.data
                } })
            })
            .catch(err => console.log(err));
        // }
        API.getHotels({city2: "New York"}).then(response => {
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
            console.log("Hotels", hotelsList);
            setHotelState({...hotelState, hotelsData: hotelsList})
        }).catch(err => console.log(err));
    };
    return (
        <div>
            <SearchContainer 
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            />
            <CardLayout 
            flightState = {flightState}
            />
        </div>
    )
}

export default Home;