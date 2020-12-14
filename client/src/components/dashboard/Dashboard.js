import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PrivateNav from "../Nav/PrivateNav.js";
import Footer from "../Footer/Footer"
import Greeting from "./Greeting";
import SearchInfo from "../SavedSearch/SearchInfo";
import SavedList from "../SavedSearch/SavedList";
import API from "../../utils/API";
import "./Dashboard.css";

function Dashboard(props) {
  // define state
  const [savedState, setSavedState] = React.useState([]);
  const [flightState, setFlightState] = React.useState({ Intial: "Start" })
  const [hotelState, setHotelState] = React.useState([])
  const [newsState, setNewsState] = React.useState([])
  const [attractionState, setAttractionState] = React.useState([])
  const [searchObj, setSearchObj] = React.useState({});

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

  function formatDate(date) {
    let splitDate = date.split("T")
    let formatedDate = splitDate[0];
    return formatedDate
  }


  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  const { user } = props.auth;
  // get saved searches list from database
  React.useEffect(() => getSavedList(props.auth.user.id));

  // define function to get data from database
  const getSavedList = userId => {
    API.getSearch(userId).then(response => {
      let myResponse = response.data
      setSavedState(myResponse)
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const index = event.target.parentElement.getAttribute("data-id");
    const entryObj = {
      city1: savedState[index].city1,
      city2: savedState[index].city2,
      stateCode: savedState[index].stateCode,
      outboundDate: savedState[index].outboundDate
    }
    setSearchObj(entryObj);

    API.getFlight({
      city1: entryObj.city1,
      city2: entryObj.city2,
      outboundDate: formatDate(entryObj.outboundDate)
      })
      .then(res => {
        console.log("entryobj", entryObj)
        console.log("data", res.data)
        changeFlightState(res);
      })
      .catch(err => {
        console.log(err)
        setFlightState({ Quotes: "N/A" })
      });

    API.getState(entryObj.stateCode)
      .then(res => {
          setNewsState(res.data);
      })
      .catch(err => {console.log(err)
          setNewsState(["N/A"])
      });

    API.getHotels({ city2: entryObj.city2 }).then(response => {
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

    API.getAttractions(entryObj.city2)
    .then(response => {
        const attractionsList = response.data
        setAttractionState(attractionsList);
    }).catch(err => {
        console.log(err)
        setAttractionState(["N/A"])
    }
    );

  }

  return (
    <div>
      <PrivateNav />
      <Container fluid className="cont mt-4">
        {/* <Row>
          <Greeting
            username={user.name.split(" ")[0]}
            logout={onLogoutClick}
          />
        </Row> */}
        <Row>
        {/* <Col 
            xs={{span: 12, offsset: 0}}
            md={{span: 8, offset: 2}} 
            lg={{span: 6, offset: 3}} 
          >
            <SavedList 
              list={(savedState[0]) ? (Object.values(savedState)) : (null)}
              handleClick = {handleClick}
            />
          </Col> */}
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 5, order: 1 }}
            xl={{ span: 4, order: 1 }}>
            <SavedList
              list={(savedState[0]) ? (Object.values(savedState)) : (null)}
              handleClick={handleClick}
            />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 7, order: 2 }}
            xl={{ span: 8, order: 2 }}>
            <Greeting
              username={user.name.split(" ")[0]}
              logout={onLogoutClick}
            />
          </Col>
          <Col
            xs={{ span: 12, order: 12 }}
            md={{ span: 7, offset: 5, order: 12 }}
            xl={{ span: 8, offset: 4, order: 12 }}>
            <SearchInfo 
            search={(!searchObj.city1) ? null : searchObj} 
            flightInfo = {flightState}
            newsInfo = {newsState}
            hotelInfo = {hotelState}
            attractionInfo = {attractionState}
            />
          </Col>
          </Row>
        </Container>
         <Footer />
      </div >
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);