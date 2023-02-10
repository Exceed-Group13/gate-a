import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const Menu = ({ menu1="Manage", menu2="Password" }) => {
    return (
        <>
          <Navbar variant="dark">
            <Container>
              <Navbar.Brand href="#home">Gate-A</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink to="/profile">{menu1}</NavLink>
                <NavLink to="/resetpass">{menu2}</NavLink>
                {/* <Nav.Link href="home">{menu1}</Nav.Link>
                <Nav.Link href="features">{menu2}</Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default Menu