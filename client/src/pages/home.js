import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";
import HomeCard from "../components/Layout/HomeCard.js";


function Home() {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState(
        {}
    )
    const [hotelState, setHotelState] = React.useState([])
    const [newsState, setNewsState] = React.useState([])

function myTest(test){
    console.log("testing test", test)
}
    function changeFlightState(data) {
        console.log("setting data...", data.data)
        setFlightState(
            {
                ...flightState,
                Quotes: data.data.Quotes,
                Carriers: data.data.Carriers,
                Places:  data.data.Places
                    
            }
        );
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })

    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("running?");

        API.getFlight({
            city1: formObject.city1,
            city2: formObject.city2,
            outboundDate: formObject.outboundDate
        })
        .then(res => {
            console.log("FS", res)
          changeFlightState(res);
             })
        .catch(err => console.log(err));


        //get covid info
        API.getState(formObject.stateCode)
            .then(res => {
                setNewsState(res.data);
            })
            .catch(err => console.log(err));
        // get hotels info
        API.getHotels({ city2: formObject.city2 }).then(response => {
            response.data.sort((a, b) => b.starRating - a.starRating);
            const hotelsList = response.data
                .slice(0, 10).map(hotel => {
                    return {
                        name: hotel.name,
                        star: hotel.starRating,
                        image: hotel.thumbnailUrl,
                        price: hotel.ratePlan.price.current
                    }
                });
            setHotelState(hotelsList);
        }).catch(err => console.log(err));

        API.getAttractions(formObject.city2).then(response => {
            // console.log("calling attractions API",response);
        })
    };
    return (
        <div>
            <SearchContainer
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
       
            <CardLayout
                flightState={flightState}
                hotelState={hotelState}
                newsState={newsState}
            />
        </div>
    )
}
//test

export default Home;