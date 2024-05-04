import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css';
import imagelogo from './image/logo.png';

function HeroSection() {
  return (
    <div className="main-container">
      <Navbar variant="dark" expand="lg" className="navbar">
        <Container fluid>
          {/* Replace text with logo image */}
          <Navbar.Brand href="#home" className="logo">
            <img src={imagelogo} alt="Your Logo" /> {/* Use your logo image here */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">MATCH</Nav.Link>
              <Nav.Link href="#link">PAGES</Nav.Link>
              <Nav.Link href="#link">BLOG</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
            </Nav>
            <button class="button-86" role="button">SIGN UP</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="banner">
        <Container fluid>
          <Row>
            <Col>
              <div className="banner-content">
                <h1>TOP</h1>
                <h1> GAME PICK</h1>
                <h1>FOR TODAY?</h1>
                <p>where every moment is a thrill. Get ready for an unforgettable gaming experience.</p>
                <button class="button-87" role="button">PLAY NOW</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
