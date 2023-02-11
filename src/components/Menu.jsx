import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Menu = ({ menu1="Manage", menu2="Password" }) => {
    const navigate = useNavigate();
    const path = {
      "Manage" : "profile",
      "Password" : "changepass",
      "Home" : "",

    }
    return (
        <div className="navDiv">
          <Navbar variant="dark">
            <Container>
              <Nav.Link onClick={()=> navigate('/')}>
              <img src="https://i.ibb.co/TMPSnkm/GATE-A-125-125-px-4.png" style={{width:'60%', float: 'left'}}></img>
              </Nav.Link>
              <Nav className="me-auto">
                <Nav.Link onClick={()=> navigate(`/${path[menu1]}`)}>{menu1}</Nav.Link>
                <Nav.Link onClick={()=> navigate(`/${path[menu2]}`)}>{menu2}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
}

export default Menu