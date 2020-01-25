import React from 'react'
import SEO from "../components/seo"
import Hero from '../components/hero/hero';
import Section from '../components/section/section'
import BackgroundImage from '../components/background-image/background-image'
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from '../components/footer/footer';
import ImageCards from '../components/image-cards/image-cards';
const Home = () => {
    return (
        <div>
            <SEO title="Home" />
            {/* Hero Section */}
            <Hero/>

            {/* Tours Section */}
            <Section id="tours">
                <Container>
                    <h1 className="h1 inline">Tours</h1> <span className="text-red">Featured</span>
                    <ImageCards/>
                    <div className="text-center">
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
                    <div className="text-center">
                        <Button color="hunta-red">How it Works</Button>
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
                            <Button color="hunta-red">Get a Quote</Button>
                        </Col>
                        <Col md="6">
                            <BackgroundImage src="Hotel.jpg"/>
                        </Col>
                    </Row>
                </Container>
            </Section>

            {/* Testimonials Section */}
            <BackgroundImage src="AboveAdventure.jpg">
                <Section>
                    <Container>
                        <div className="text-center">
                            <Button color="hunta-red">View All</Button>
                        </div>
                    </Container>
                </Section>
            </BackgroundImage>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Home
