import React from 'react'
import BackgroundImage from '../background-image/background-image'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import paperPlane from '../../images/paper-plane.svg'
const Hero = () => {
    return (
        <div>
            <BackgroundImage src="HeroBackground.jpg" htmlTag="div" htmlClass="hero-image" bgColor="#000000">
                <Jumbotron fluid className="hero-section">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2 className="hero-text-2 text-white">Dream,</h2>
                                <h1 className="hero-text text-white">Discover,</h1>
                                <h2 className="hero-text-2 text-white">Explore.</h2>
                                <h5 className="h5 text-white inline">Let us take you there</h5> <img src={paperPlane} alt="paper plane" className="icon"/>
                            </Col>
                            <Col md="6">

                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </BackgroundImage>
        </div>
    )
}

export default Hero
