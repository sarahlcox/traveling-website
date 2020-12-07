import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
import whitelogoplaceholder from '../../Assets/whitelogoplaceholder.png';

function PrivateNav() {
    return (
        <Navbar className="nav-style" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src= {whitelogoplaceholder}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/privatehome" className="nav-link">Home</Nav.Link>
        <Nav.Link href="/signup" className="nav-link">Account</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  
  export default PrivateNav;
  