import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from './pages/Home';
import MyNav from "./pages/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <MyNav/>
      <div>
      <Route exact path="/" component={Home}/>
      </div>
    </Router>
     
  );
}

export default App;
