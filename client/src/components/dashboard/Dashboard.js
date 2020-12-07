import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PrivateNav from "../Nav/PrivateNav.js";
import API from "../../utils/API";

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
      let grabbedlist = newState.map(e => {
        return (
          <div>
            <p>{e.city1} to {e.city2}</p>
          </div>
        )
      })
      return grabbedlist
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
        <Container style={{ height: "75vh" }} className="valign-wrapper">
          <Row>
            <Col sm={12} className="center-align">
              <h2><b>Hey there,</b> {user.name.split(" ")[0]}</h2>
              <h4 className="flow-text">
                You are logged into {" "}
                <span>Travel Pocket Wizard</span>
              </h4>
              <Button
                variant="primary"
                style={{
                //   width: "150px",
                //   borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                onClick={this.onLogoutClick}
                size="lg"
                className="my-2"
              >
                Logout
                </Button>
            </Col>
            <h1>{this.grabList(this.state)}</h1>
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