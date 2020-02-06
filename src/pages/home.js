import React from 'react'
import SEO from "../components/seo"
import Hero from '../components/hero/hero';
import Section from '../components/section/section'
import BackgroundImage from '../components/background-image/background-image'
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from '../components/footer/footer';
import ImageCards from '../components/image-cards/image-cards';
import VideoBox from '../components/video-box/video-box';
import Nav from '../components/nav/nav'
import Cards from '../components/cards/cards';
import ModalButton from '../components/modal/modal-button';
import { Link } from 'gatsby';

const Home = () => {
    return (
        <div>
            <SEO title="Home" />
            {/* Hero Section */}
            <Nav />
            <Hero/>

            {/* Tours Section */}
            <Section id="tours">
                <Container>
                    <h1 className="h1 inline">Tours</h1> <span className="text-red">Featured</span>
                    <ImageCards/>
                    <div className="text-center button-container">
                        <Button color="hunta-red">View All</Button>
                    </div>
                </Container>
            </Section>

            {/* Flights Section */}
            <Section id="flights">
                <Container>
                <h1 className="h1">Flights</h1>
                </Container>
            </Section>

            {/* Jeje Section */}
            <Section id="jeje">
                <Container>
                    <h1 className="h1">Jeje</h1>
                    <VideoBox/>
                    <div className="text-center button-container">
                        <Link to="/jeje" className="btn btn-hunta-red">How it Works</Link>
                    </div>
                </Container>
            </Section>

            {/* Hotels Section */}
            <Section id="hotels">
                <Container>
                    <Row>
                        <Col md="6">
                            <h1 className="h1">Hotels</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                            </p>
                            <ModalButton color="hunta-red button-container" form>Get a Quote</ModalButton>
                        </Col>
                        <Col md="6">
                            <BackgroundImage src="Hotel.jpg"/>
                        </Col>
                    </Row>
                </Container>
            </Section>

            {/* Testimonials Section */}
            
                <Section id="testimonials" fullwidth backgroundImage="AboveAdventure.jpg">
                    <Container>
                        <Cards type="card-users" />
                        <div className="text-center button-container">
                            <Button color="hunta-red">View All</Button>
                        </div>
                    </Container>
                </Section>
            

            {/* Footer Section */}
            <Footer />

        </div>
    )
}

export default Home
