import React from 'react'
import BackgroundImage from '../background-image/background-image'
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Hero = () => {
    return (
        <div>
            <BackgroundImage src="HeroBackground.jpg" htmlTag="div" htmlClass="hero-image" bgColor="#000000">
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2 className="hero-text-2 text-white">Dream,</h2>
                                <h1 className="hero-text text-white">Discover,</h1>
                                <h2 className="hero-text-2 text-white">Explore.</h2>
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
