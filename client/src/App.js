import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from './pages/Home';
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div>
    
       <Home />
        
      </div>
     
  );
}

export default App;
