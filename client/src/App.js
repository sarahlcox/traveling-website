import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from './pages/home';
import MyNav from "./components/Nav/navbar"
import SignUp from "./pages/signup"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <MyNav/>
      <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={SignUp}/>
      </div>
    </Router>
     
  );
}

export default App;
