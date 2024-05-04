import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faBehance, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import footerimage from './image/logo.png';

function Footer() {
    return (
        <section className="contact-area" id="contact">
            <Container>
                <Row>
                    <Col lg={6} className="offset-lg-3">
                        <div className="contact-content text-center">
                            <a href="#"><img src={footerimage} alt="logo" /></a>
                            <p>WELCOME TO OUR LIVE GAMING STREAM! 🎮 Join us as we dive into the virtual world of excitement and adventure!</p>
                            <div className="hr"></div>
                            <h6>Erkkopolku 1, 89860, Finland</h6>
                            <h6>+358 17 846 5583<span>|</span>+358 17 846 9983</h6>
                            <div className="contact-social">
                                <ul>
                                    <li><a className="hover-target" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a className="hover-target" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a className="hover-target" href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a className="hover-target" href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                                    <li><a className="hover-target" href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer>
                <p>Copyright &copy; 2024 <img src={footerimage} alt="logo" /> All Rights Reserved.</p>
            </footer>
        </section>
    );
}

export default Footer;
