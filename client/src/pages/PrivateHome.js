import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API";
import Button from 'react-bootstrap/Button';
import PrivateNav from '../components/Nav/PrivateNav.js';
import Footer from "../components/Footer/Footer"
import "./Pages.css";

function formatDate(date) {
    let splitDate = date.split("/")
    splitDate.reverse()
    let formatedDate = splitDate.join("-");
    return formatedDate
}

var hideShow = "none";
function PrivateHome(props) {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({Intial: "Start"})
    const [hotelState, setHotelState] = React.useState([])
    const [newsState, setNewsState] = React.useState([])
    const [attractionState, setAttractionState] = React.useState([])
    const [saved, setSaved] = React.useState(false)

    function changeFlightState(data) {
        setFlightState(
            {
                ...flightState,
                Quotes: data.data.Quotes,
                Carriers: data.data.Carriers,
                Places: data.data.Places,
                Intial: "Called"

            }
        );
    }

    function saveInput() {
        setSaved(true);
        API.saveSearch({
            userId: props.userId.id,
            city1: formObject.city1,
            city2: formObject.city2,
            stateCode: formObject.stateCode,
            outboundDate: formatDate(formObject.outboundDate)
        })
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
            outboundDate: formatDate(formObject.outboundDate)
        })
            .then(res => {
                changeFlightState(res);
            })
            .catch(err => {
                console.log(err)
                setFlightState({ error: "N/A" })
            });


        //get covid info
        API.getState(formObject.stateCode)
            .then(res => {
                setNewsState(res.data);
            })
            .catch(err => {
                console.log(err)
                setNewsState(["N/A"])
            });
        // get hotels info
        API.getHotels({ city2: formObject.city2 }).then(response => {
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
        }).catch(err => {
            console.log(err)
            setHotelState(["N/A"])
        }
        );

        // get attraction info
        API.getAttractions(formObject.city2)
            .then(response => {
                const attractionsList = response.data
                setAttractionState(attractionsList);
            }).catch(err => {
                console.log(err)
                setAttractionState(["N/A"])
            }
            );
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

            <div className="save-div">
                <Button className="save-btn" onClick={saveInput}>
                    Save Search
                </Button>
                <Toast
                    className="save-toast"
                    onClose={() => setSaved(false)}
                    show={saved}
                    delay={2000}
                    autohide
                >
                    <Toast.Body>Search Saved!</Toast.Body>
                </Toast>
            </div>
            <Footer />
        </div>
    )
}
//test

export default PrivateHome;