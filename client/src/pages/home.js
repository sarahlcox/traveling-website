import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";


function Home() {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState(
        {}
    )
    const [hotelState, setHotelState] = React.useState([])
    const [newsState, setNewsState] = React.useState([])
    const [savedState, setSavedState] = React.useState([])

    function changeFlightState(data) {
        // console.log("setting data...", data.data)
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
    function handleFormSubmit(event) {
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
                console.log("SL:",res.data);
                setNewsState(res.data);
            })
            .catch(err => console.log(err));
        // get hotels info
        API.getHotels({city2: formObject.city2}).then(response => {
            // console.log("HS", response.data)
            response.data.sort((a, b) => b.starRating - a.starRating);
            const hotelsList = response.data
                .slice(0, 10).map(hotel => {
                    const hotelObject = {
                        name: hotel.name,
                        star: hotel.starRating,
                        image: hotel.thumbnailUrl,
                        price: (hotel.ratePlan) ? hotel.ratePlan.price.current : "N/A"
                    }
                    return hotelObject;
                });
            setHotelState(hotelsList);
        }).catch(err => console.log(err));

        API.getAttractions(formObject.city2).then(response => {
            console.log("calling attractions API",response.data);
        })

        API.saveSearch(formObject).then(response => {
            console.log("save", response.data);
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