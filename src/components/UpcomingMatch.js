import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UpcomingMatch.css';
import imagebox1 from './image/play-btn2.webp';
import imagebox2 from './image/upcoming-game-thumb2.webp';
import imagebox3 from './image/game-vs1.webp';
import imagebox4 from './image/upcoming-game-thumb1.webp';
import imagebox5 from './image/upcoming-game-thumb3.webp';

function UpcomingMatch() {
  return (
    <Container fluid className="Upcoming-Match">
      <Container className="main-heading text-center">
        <h1>UPCOMING MATCH</h1>
        <p>The upcoming match is stirring anticipation, <br/> promising an epic clash where heroes will rise and legends will be born.</p>
        <div className="custom-box">
          <Row>
            <Col sm={5} className='content-match text-center'>
              <h2>03 June, 2024, 05:01:00 AM</h2>
              <h3>SKRIT TOURNAMENT 2024</h3>
              <h4>06 Teams Registered</h4>
            </Col>
            <Col sm={2} className="d-flex align-items-center justify-content-center">
              <a href="link_to_your_destination">
                <div className="circle-background">
                  <img src={imagebox1} alt="Image 2" className="center-image" />
                </div>
              </a>
            </Col>
            <Col sm={5} className="image-column text-center">
              <Row>
                <Col>
                  <img src={imagebox2} alt="Image 3" className="center-image" />
                </Col>
                <Col>
                  <img src={imagebox3} alt="Image 4" className="center-image" />
                </Col>
                <Col>
                  <img src={imagebox4} alt="Image 5" className="center-image" />
                </Col>
              </Row>
            </Col>
          </Row>
          
        </div>
        <div className="custom-box">
          <Row>
            <Col sm={5} className='content-match text-center'>
              <h2>04 June, 2024, 05:01:00 AM</h2>
              <h3>SKRIT TOURNAMENT 2024</h3>
              <h4>06 Teams Registered</h4>
            </Col>
            <Col sm={2} className="d-flex align-items-center justify-content-center">
              <a href="link_to_your_destination">
                <div className="circle-background">
                  <img src={imagebox1} alt="Image 2" className="center-image" />
                </div>
              </a>
            </Col>
            <Col sm={5} className="image-column text-center">
              <Row>
                <Col>
                  <img src={imagebox2} alt="Image 3" className="center-image" />
                </Col>
                <Col>
                  <img src={imagebox3} alt="Image 4" className="center-image" />
                </Col>
                <Col>
                  <img src={imagebox5} alt="Image 5" className="center-image" />
                </Col>
              </Row>
            </Col>
          </Row>
          
        </div>
      </Container>
    </Container>
  );
}

export default UpcomingMatch;
