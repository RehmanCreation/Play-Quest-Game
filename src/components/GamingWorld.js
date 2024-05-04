import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './GamingWorld.css'; 
import imagegame from './image/gaming-world1.webp';
import imagegame1 from './image/gaming-world2.webp';
import imagegame2 from './image/gaming-world3.webp';

function GamingWorld() {
  return (
    <div className="gaming-world-container">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h1>WELCOME TO THE EXCITING</h1>
            <h1>REALM OF GAMING!</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src={imagegame} />
              <Card.Body>
                <Card.Title>BREAKING NEWS</Card.Title>
                <Card.Text>
                  Gamers, brace yourselves for the latest updates from the gaming world! 🎮 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src={imagegame1} />
              <Card.Body>
                <Card.Title>BREAKING NEWS</Card.Title>
                <Card.Text>
                  WELCOME TO OUR LIVE GAMING STREAM! 🎮 Join us as we dive into the virtual world of excitement and adventure!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src={imagegame2} />
              <Card.Body>
                <Card.Title>ANNOUNCEMENT</Card.Title>
                <Card.Text>
                  Get ready to showcase your skills on the ultimate battleground! 🏆 Our Game Tournaments are here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GamingWorld;
