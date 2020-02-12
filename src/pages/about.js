import React from 'react'
import SEO from "../components/seo"
import Header from "../components/header/header"
import Nav from '../components/nav/nav'
import Section from '../components/section/section'
import BackgroundImage from '../components/background-image/background-image'
import paperPlane from '../images/paper-plane.svg'
import { Container, Row, Col, Button } from 'reactstrap';
import Cards from '../components/cards/cards';
import Footer from '../components/footer/footer';


const About = () => {
    return (
        <div>
            <SEO title="About" />
            {/* Header Section */}
            <Nav />
            <Header type="header-about" info="tour"/>

            {/* About Section */}
            <Section id="about">
                <Container>
                    <Row>
                        <Col md="6">
                            <BackgroundImage src="about-map.png" />
                        </Col>
                        <Col md="6">
                            <h1 className="h1">Best Travel Booking Online</h1>
                            <p>
                            We are a travel management company based in Lagos that provides customers 
                            with all they need to research, plan and purchase a trip. Through our network 
                            of partners both locally and globally, we are committed to providing the best fares 
                            and our ultimate aim is service delivery of the highest quality standard while maintaining a competitive edge..
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            {/* Company mission*/}
            <Section fullwidth backgroundImage="AboveAdventure.jpg">
                <Container>
                    <div className="about-icon"><img src={paperPlane} alt="paper plane"/> </div>
                    <Cards type="card-about" />                       
                </Container>
            </Section>

            {/* Footer Section */}
            <Footer />
            
        </div>
    )
}

export default About
