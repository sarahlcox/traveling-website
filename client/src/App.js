import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// import Login from "./components/Login";
import Home from './pages/home';
import MyNav from "./components/Nav/navbar"
// import SignUp from "./pages/signup"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard"
import PrivateHome from "./pages/PrivateHome";

import 'bootstrap/dist/css/bootstrap.min.css';

let decoded;

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App () {
  
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <MyNav /> */}
            <Route exact path="/" component =  {Home} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/privatehome" component={()=><PrivateHome userId={decoded}/>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
}

export default App;
