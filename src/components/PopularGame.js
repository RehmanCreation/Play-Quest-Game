import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './PopularGame.css'; // Import CSS file
import popularimage from './image/popular-game-thumb5.webp'; // Use your actual image paths

function PopularGame() {
  const [isHoveredLeft1, setIsHoveredLeft1] = useState(false);
  const [isHoveredRight1, setIsHoveredRight1] = useState(false);
  const [isHoveredLeft2, setIsHoveredLeft2] = useState(false);
  const [isHoveredRight2, setIsHoveredRight2] = useState(false);

  return (
    <Container fluid className="Popular-Game">
      <Container className="text-center">
        <h1>POPULAR GAME</h1>
        <p>Games transcend borders, cultures, and ages, weaving <br/> a tapestry of joy and camaraderie among millions worldwide.</p>
        <Row>
          <Col md={6} className='popular-card'>
            <div 
              className={`image-container ${isHoveredLeft1 ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHoveredLeft1(true)}
              onMouseLeave={() => setIsHoveredLeft1(false)}
            >
              <img 
                src={popularimage} 
                alt="Left Image" 
                className={`img-fluid ${isHoveredLeft1 ? 'blur' : ''}`}
              />
              {isHoveredLeft1 && (
                <div className="centered-button">
                <button class="button-89" role="button">GAME DETAILS</button>
                </div>
              )}
            </div>
          </Col>
          <Col md={6} className='popular-card'>
            <div 
              className={`image-container ${isHoveredRight1 ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHoveredRight1(true)}
              onMouseLeave={() => setIsHoveredRight1(false)}
            >
              <img 
                src={popularimage} 
                alt="Right Image" 
                className={`img-fluid ${isHoveredRight1 ? 'blur' : ''}`}
              />
              {isHoveredRight1 && (
                <div className="centered-button">
                <button class="button-89" role="button">GAME DETAILS</button>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='popular-card'>
            <div 
              className={`image-container ${isHoveredLeft2 ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHoveredLeft2(true)}
              onMouseLeave={() => setIsHoveredLeft2(false)}
            >
              <img 
                src={popularimage} 
                alt="Left Image" 
                className={`img-fluid ${isHoveredLeft2 ? 'blur' : ''}`}
              />
              {isHoveredLeft2 && (
                <div className="centered-button">
                <button class="button-89" role="button">GAME DETAILS</button>
                </div>
              )}
            </div>
          </Col>
          <Col md={6} className='popular-card'>
            <div 
              className={`image-container ${isHoveredRight2 ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHoveredRight2(true)}
              onMouseLeave={() => setIsHoveredRight2(false)}
            >
              <img 
                src={popularimage} 
                alt="Right Image" 
                className={`img-fluid ${isHoveredRight2 ? 'blur' : ''}`}
              />
              {isHoveredRight2 && (
                <div className="centered-button">
                <button class="button-89" role="button">GAME DETAILS</button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PopularGame;
