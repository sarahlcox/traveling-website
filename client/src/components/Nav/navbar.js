import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
import whitelogoplaceholder from '../../Assets/whitelogoplaceholder.png';

function MyNav() {
    return (
        <Navbar className="nav-style" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src= {whitelogoplaceholder}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signup">Account</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  
  export default MyNav;
  