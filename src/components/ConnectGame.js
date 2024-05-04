// ConnectGame.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ConnectGame.css'; // Importing CSS file

function ConnectGame() {
  return (
    <Container fluid className='Connect-Game'>
      <Container>
        <Row>
          <Col>
            <div className="content-box">
              <Row>
                <Col xs={6}>
                  <h2 className="connect-game-heading">CONNECT WITH US</h2>
                  <h3 className="connect-game-heading">FOR GAMING UPDATE.</h3>
                </Col>
                <Col xs={6} className="d-flex justify-content-end align-items-center">
                <button class="button-88" role="button">CONNECT NOW</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ConnectGame;
