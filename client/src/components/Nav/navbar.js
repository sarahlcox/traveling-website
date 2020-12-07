import React from "react";
import { Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import './Navbar.css';
import TPWLogo from '../../Assets/TPWLogo.png';

// function navBrandRenderer() {
//   var w= window.innerWidth;
//   if (w>994px) {
// }
function MyNav() {
    return (
      <Navbar
      className="nav-style main nav-margins d-flex justify-content-between"
      expand="lg"
    >
      <a className="link-style mobile-logo" to="/" style={{ flex: "1" }}>
      <NavbarBrand className="logo-size" alt="logo">
          <img
            height="59.22"
            width="259"
            src={TPWLogo}
          />
        </NavbarBrand>
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto parent">
        <Nav.Link href="/" className="resp-link">Home</Nav.Link>
          <Nav.Link>
          <Navbar.Brand href="#home">
          <img
            alt=""
            src= {TPWLogo}
            className="d-inline-block align-top mx-auto resp-logo"
            id= "image-size"
          
          />{' '}
        </Navbar.Brand>
          </Nav.Link>
          <Nav.Link href="/signup" className="resp-link">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="navbar-collapse collapse" style={{ flex: "1" }} />
    </Navbar>
    );
  }
  
  export default MyNav;
  