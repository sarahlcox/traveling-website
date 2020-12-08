import React, { useEffect } from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";
import Button from 'react-bootstrap/Button';
import PrivateNav from '../components/Nav/PrivateNav.js';
import "./Pages.css";

function formatDate(date) {
    let splitDate = date.split("/")
    splitDate.reverse()
    let formatedDate = splitDate.join("-");
    return formatedDate
}

var hideShow="none";
function PrivateHome(props) {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({})
    const [hotelState, setHotelState] = React.useState([])
    const [newsState, setNewsState] = React.useState([])
    const [attractionState, setAttractionState] = React.useState([])
    // const [savedState, setSavedState] = React.useState([])
    const [alertDivState, setAlertDivState] = React.useState("none")


    function changeFlightState(data) {
        // console.log("setting data...", data.data)
        setFlightState(
            {
                ...flightState,
                Quotes: data.data.Quotes,
                Carriers: data.data.Carriers,
                Places: data.data.Places

            }
        );
    }

    function saveInput(){
        setTimeout(showAlert,2000);
        setTimeout(hideAlert, 10000);
        API.saveSearch({ 
            userId: props.userId.id,
            city1: formObject.city1,
            city2: formObject.city2,
            stateCode: formObject.stateCode,
            outboundDate: formatDate(formObject.outboundDate)
        })
    }
    function showAlert(){
        // console.log("it runs");
        setAlertDivState("block");
        hideShow="block";
        // console.log(alertDivState)
        // console.log(hideShow);
    }
    function hideAlert(){
        // console.log("it runs");
        setAlertDivState("none");
        hideShow="block";
        // console.log(alertDivState)
        // console.log(hideShow);
    }

    useEffect(()=>{
        console.log(alertDivState);
    }, [alertDivState])

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
            outboundDate: formatDate(formObject.outboundDate)
        })
            .then(res => {
                // console.log("FS", res)
                changeFlightState(res);
            })
            .catch(err => console.log(err));


        //get covid info
        API.getState(formObject.stateCode)
            .then(res => {
                // console.log("SL:", res.data);
                setNewsState(res.data);
            })
            .catch(err => console.log(err));
        // get hotels info
        API.getHotels({ city2: formObject.city2 }).then(response => {
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

        // get attraction info
        API.getAttractions(formObject.city2)
        .then(response => {
            const attractionsList = response.data
        setAttractionState(attractionsList);
                })
    };
    return (
        <div>
            <PrivateNav />
            <SearchContainer
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />

            <CardLayout
                flightState={flightState}
                hotelState={hotelState}
                newsState={newsState}
                attractionState={attractionState}
            />
            
            <div className="button-div">
                <Button className="save-btn" onClick={saveInput}>Save Search</Button>{' '}
                <h4 className="save-alert" style={{ display: alertDivState }}>Search Saved!</h4>
            </div>
        </div>
    )
}
//test

export default PrivateHome;