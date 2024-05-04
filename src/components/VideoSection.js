import React from 'react';
import { Container } from 'react-bootstrap';
import './VideoSection.css';
import MyVideo from './video/37585-414024825_small.mp4';

function VideoSection() {
    return (
      <Container fluid className="video-section-container">
        {/* Video Embed */}
        <Container className="video-container">
          <video width="800" height="450" autoPlay loop>
            <source src={MyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </Container>
    );
}

export default VideoSection;
