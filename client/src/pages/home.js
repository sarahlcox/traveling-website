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
    const [placesState, setPlacesState]= React.useState([])
    
function myTest(test){
    console.log("testing test", test)
}
    function changeFlightState(data) {
        console.log("setting data...", data.data)
        setFlightState(
            {
                // ...flightState,
                Quotes: data.data.Quotes,
                Carriers: data.data.Carriers,
                Places: data.data.Places
            }
            //departure date is res.data.Quotes[0].OutboundLeg.DepartureDate
        //    {fd: data} 
        );
    }
    // function changePlaceState(data){
    //     console.log("places data",data)
    //     setPlacesState(data)
    // }

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
            // myTest(res)
            // changeFlightState(res);
            // changePlaceState(res);
          changeFlightState(res);
             })
        .catch(err => console.log(err));

        // API.getFlight({
        //     city1: formObject.city1,
        //     city2: formObject.city2,
        //     outboundDate: formObject.outboundDate
        // })
        // .then(res => {
        //     console.log("FSV2", res)
        //     // myTest(res)
        //     // changeFlightState(res);
            
        //  const placesList = res.data.Places;
        //  console.log("places list", placesList ) 
        //  changePlaceState(placesList); 
        // //   changeFlightState(res, placesList);
        //      })
        // .catch(err => console.log(err));


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

        if(flightState.Places){
            setPlacesState(flightState)
        }
        console.log("places state" )
    }


    // console.log("flightSate:",flightState)
    // if(flightState.Places){
    //     setPlacesState(flightState)
    // }
    // console.log(placesState)
    return (
        <div>
            <SearchContainer
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
       
            <CardLayout
                flightState={flightState}
                placeState = {placesState}
                hotelState={hotelState}
                newsState={newsState}
            />
        </div>
    )
}


export default Home;