import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logos/Group 1329.png';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className='w-100'>
      <Navbar collapseOnSelect expand="lg" className='bg-dark' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img width={202.81} height={60} src={logo} alt='logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link className='text-white pt-4 fs-4' as={Link} to="/">Home</Nav.Link>
              <Link className='text-white pt-4 fs-4 text-decoration-none' as={Link} to="/donation">Donation</Link>
              <Nav.Link className='text-white pt-4 fs-4' as={Link} to="/event">Events</Nav.Link>
              <Nav.Link className='pt-3'as={Link} to='/register' ><button className='bg-primary text-white border-0 reg-btn'>
                Register
              </button></Nav.Link>
              <Nav.Link className='pt-3' as={Link} to='/admin'><button className='bg-primary text-white border-0 reg-btn '>
                Admin
              </button></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;