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
  // define state
  state = []

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // when component moounts, get saved searches list from database
  componentDidMount() {
    this.getSavedList(this.props.auth.user.id);
  }
  // define function to get data from database
  getSavedList = userId => {
    API.getSearch(userId).then(response => {
      // console.log(response.data);
      let myResponse = response.data
      this.setState(myResponse)
    })
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <PrivateNav />
        <Container fluid className="cont mt-4">
          <Row>
            <Col 
            xs={{span: 12, order: 2}}
            md={{span: 5, order: 1}} 
            xl={{span: 4, order: 1}}>
              <SearchesList list={(this.state[0]) ? (Object.values(this.state)) : (null)} />
            </Col>
            <Col 
            xs={{span: 12, order: 1}} 
            md={{span: 7, order: 2}} 
            xl={{span: 8, order: 2}}>
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
            </Col>
            <Col 
            xs={{span: 12, order: 12}} 
            md={{span: 7, offset: 5, order:12}} 
            xl={{span: 8, offset: 4, order:12}}>
              <h1>Saved Search Travel Details Go Here</h1>
            </Col>
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