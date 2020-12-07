import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PrivateNav from "../Nav/PrivateNav.js";
import SearchesList from "./searchedList"
import API from "../../utils/API";
import "./Dashboard.css";

class Dashboard extends Component {

  state = []


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getSavedList = userId => {
    API.getSearch(userId).then(response => {
      // console.log(response.data);
      let myResponse = response.data
      this.setState(myResponse)
    })
  }
  grabList = (mystate) => {
    if (mystate[0]) {
      const newState = Object.values(mystate);
      // console.log(newState);
        return (
        <SearchesList list = {newState}/>
        )
      
      
    }
    else {
      return <p>no info</p>
    }

  }


  render() {
    const { user } = this.props.auth;
    // console.log("user id", this.props.auth.user.id);
    this.getSavedList(this.props.auth.user.id);
    // console.log("state", this.state[0])
    return (
      <div>
        <PrivateNav />
        <Container className="cont mt-4">
          <Row>
            <Jumbotron className="greeting mx-auto">
              <h1 className="mb-4"><b>Hey there,</b> {user.name.split(" ")[0]}</h1>
              <h3 className="mb-2">
                You are logged into {" "}
                <span>Travel Pocket Wizard</span>
              </h3>
              <Button
                onClick={this.onLogoutClick}
                size="lg"
                className="logout-btn my-2"
              >
                Logout
                </Button>
            </Jumbotron>
          </Row>
          <Row>
            {this.grabList(this.state)}
          </Row>
        </Container>
      </div>
    );
  }
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