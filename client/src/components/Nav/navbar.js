import React from "react";
import { Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import './Navbar.css';
import TPWLogo from '../../Assets/TPWLogo.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function MyNav() {
    return (
      <Navbar
      className="nav-style main nav-margins d-flex justify-content-between"
      expand="lg"
    >
      <a className="link-style" to="/" style={{ flex: "1" }}>
        <NavbarBrand className="logo-size" alt="logo">
        </NavbarBrand>
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto parent">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link>
          <Navbar.Brand href="#home">
          <img
            alt=""
            src= {TPWLogo}
            className="d-inline-block align-top mx-auto"
            id= "image-size"
          
          />{' '}
        </Navbar.Brand>
          </Nav.Link>
          <Nav.Link href="/signup">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="navbar-collapse collapse" style={{ flex: "1" }} />
    </Navbar>
    );
  }
  
  export default MyNav;
  