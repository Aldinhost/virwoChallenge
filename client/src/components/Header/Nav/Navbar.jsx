//import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  

  return (
    <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">My News Feed</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to="/home/logout"><BiUserCircle/></NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent