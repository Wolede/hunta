import React from 'react'
import ContactBox from '../contact-box/contact-box'
import { Container, Row, Col } from 'reactstrap';
import Section from '../section/section'
import Logo from '../logo/logo';

const Footer = () => {
    return (
        <div>
            <ContactBox/>
            <Section id="footer" darkBackground>
                <Container>
                    <Row>
                        <Col>
                            <Logo logoWhite />
                            <p className="text-white mt-4 smaller">10B1, SARUMOH OLADOSU CLOSE, OFF SHAKIRU ANJORIN STREET LEKKI PHASE 1, LAGOS, NIGERIA</p>
                        </Col>
                        <Col>
                            <h6 className="h6 text-white">Newsletter</h6>
                            <p className="text-white mt-4 smaller">Sign up for our mailing list to get latest updates and offers.</p>
                        </Col>
                        <Col>
                            <h6 className="h6 text-white inline mr-4">Instagram Feed</h6>  <a href="https://instagram.com" className="red-link">Follow Us</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-white smaller text-center mt-5">© COPYRIGHT {new Date().getFullYear()}. HUNTA GROUP.</p>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </div>
    )
}

export default Footer
