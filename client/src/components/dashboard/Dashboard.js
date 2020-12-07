import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PrivateNav from "../Nav/PrivateNav.js";
import API from "../../utils/API";
import "./Dashboard.css";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getSavedList = userId => {
    API.getSearch(userId).then(response => {
      console.log(response.data);
    })
  }

render() {
    const { user } = this.props.auth;
    console.log("user id", this.props.auth.user.id);
    this.getSavedList(this.props.auth.user.id);
return (
      <div>
        <PrivateNav />
          <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align welcome-message">
                <h4>
                  <b>Hey there,</b> {user.name.split(" ")[0]}
                  <p className="flow-text">
                    You are logged into your{" "}
                    <span style={{ fontFamily: "monospace" }}>Travel Pocket Wizard</span> dashboard 👏
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
                  className="btn btn-large waves-effect waves-light hoverable user-btn"
                >
                  Logout
                </button>
              </div>
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