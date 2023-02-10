import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Menu = ({ menu1="Manage", menu2="Password" }) => {
    const navigate = useNavigate();
    return (
        // <div className="navDiv">
          <Navbar variant="dark" style={{backgroundColor: 'black'}}>
            <Container>
              <Navbar.Brand href="#home">Gate-A</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={()=> navigate('/profile')}>{menu1}</Nav.Link>
                <Nav.Link onClick={()=> navigate('/resetpass')}>{menu2}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        // </div>
      );
}

export default Menu