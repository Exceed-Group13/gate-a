import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = ({ menu1="Manage", menu2="Password" }) => {
    return (
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Gate-A</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="home">{menu1}</Nav.Link>
                <Nav.Link href="features">{menu2}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default Menu