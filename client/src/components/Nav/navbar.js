import React from "react";
import { Navbar,Nav} from 'react-bootstrap'
function MyNav() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">Let's Travel!</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signup">Account</Nav.Link>
        </Nav>
    </Navbar>
    );
  }
  
  export default MyNav;
  