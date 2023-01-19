import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Route, Routes, Link } from "react-router-dom"
import logo from './images/logo.png';
import profile from './images/profile.png';
import cart from './images/cart.png';
import Shop from './Shop';



function Bar() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container id="container" fluid>

            <Navbar.Brand href="#">
             
            <img id="nav-logo" className="logo" src={logo} alt="logo" />
            
            </Navbar.Brand>

            
            
            <Navbar.Toggle id="test" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id= {`offcanvasNavbarLabel-expand-${expand}`}>

                <img id="logo" className="logo" src={logo} alt="logo" />

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 
                  
                  <Link id="link" to="/">Home</Link> 
                  <Link id="link" to="Shop">Shop</Link>
                  <Link id="link" to="#">Schedule Delivery</Link>
                  <Link id="link" to="#">Track Orders</Link>
                  
                  <div className='nav-icons'>
            <img id="profile" className="profile" src={profile} alt="profile icon" />
            <img id="cart" className="cart" src={cart} alt="cart icon" />
            </div>
                  {/* <NavDropdown 
                    title="Portfolio"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <center><Link id="link" to="#">Simple Pendants</Link></center></NavDropdown.Item>

                    <NavDropdown.Item>
                    <center><Link id="link" to="#">Fancy Pendants</Link></center>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <center><Link id="link" to="#">Beaded Chains</Link></center>
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Bar;