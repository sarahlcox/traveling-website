import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
import whitelogoplaceholder from '../../Assets/whitelogoplaceholder.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function MyNav() {
    return (
<Navbar className="nav-style" id="our-nav" sticky="top">
        <Nav className="justify-content-center ">
            <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src= {whitelogoplaceholder}
            width="50"
            height="50"
            className="d-inline-block align-top mx-auto"
          />{' '}
        </Navbar.Brand>
        <Nav>
        <Nav.Link href="/signup">Account</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
  
  export default MyNav;
  