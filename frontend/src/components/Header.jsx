import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarOne" variant="primary" sticky="top">
      <Container>
        <Navbar.Brand href="/">Barre Patterns</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/combinations">Combinations</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Combination
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Class</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;