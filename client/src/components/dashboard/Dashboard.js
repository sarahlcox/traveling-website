import React, { Component } from "react";
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
      console.log(response.data);
      let myResponse = response.data
      this.setState(myResponse)
    })
  }
  grabList = (mystate) => {
    if (mystate[0]) {
      const newState = Object.values(mystate);
      console.log(newState);
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
      return null
    }

  }


  render() {
    const { user } = this.props.auth;
    console.log("user id", this.props.auth.user.id);
    this.getSavedList(this.props.auth.user.id);
    console.log("state", this.state[0])
    return (
      <div>
        <PrivateNav />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a{" "}
                  <span style={{ fontFamily: "monospace" }}>Traveling Website</span> app 👏
                  </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
                </button>
            </div>
            <h1>{this.grabList(this.state)}</h1>
          </div>
        </div>
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