import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
import whitelogoplaceholder from '../../Assets/whitelogoplaceholder.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MyNav() {
    return (
        <Navbar className="nav-style" sticky="top">
          <Row>
        <Nav className="justify-content-center">
          <Col>
            <Nav.Link href="/">Home</Nav.Link>
          </Col>
        </Nav>
        <Col>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src= {whitelogoplaceholder}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        </Col>
        <Col>
        <Nav>
        <Nav.Link href="/signup">Account</Nav.Link>
        </Nav>
        </Col>
        </Row>

      </Navbar>
    );
  }
  
  export default MyNav;
  