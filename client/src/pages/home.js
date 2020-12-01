import React from 'react';
import SearchContainer from '../components/Search/SearchContainer.js';
import CardLayout from '../components/Layout/CardLayout.js';
import API from "../utils/API"

 
function Home () {

    const [formObject, setFormObject] = React.useState({})
    const [flightState, setFlightState] = React.useState({
        flightData: {}
    })

    // React.useEffect(()=>{
    //     //make state and pass the state instead of city names & date
    //     API.getFlight({
    //         city1: "Chicago",
    //         city2: "New York",
    //         outboundDate: "test"
    //     }).then(res =>{
    //         // console.log("FE res", res)
    //     })
    // },[])
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
        // console.log("testing... working")
      };
      function handleFormSubmit(event) {
        event.preventDefault();
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
      };
    return (
        <div>
            <SearchContainer 
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            />
            {!(flightState.flightData === {}) && <CardLayout 
            flightState = {flightState}
            />}
            
        </div>
    )
}

export default Home;