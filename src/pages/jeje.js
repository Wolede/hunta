import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Section from '../components/section/section'
import { Container, Row, Col, Button } from 'reactstrap';
import VideoBox from '../components/video-box/video-box';
import Cards from '../components/cards/cards';

const Jeje = () => {
    return (
        <div>
            <SEO title="Jeje" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}

            {/* Calculate Jeje Section */}
            <Section id="calculate-jeje">
                <Container>
                    <h1 className="h1 text-center">Calculate Jeje</h1>
                </Container>
            </Section>

            {/* How it works section */}
            <Section id="how-it-works" fullwidth backgroundImage="AboveAdventure.jpg">
                <Container>
                    <h1 className="h1 text-center text-white">How it Works</h1>
                    <Cards type="card-jeje" />
                </Container>
            </Section>


            {/* Video Section */}
            <Section id="jeje">
                <Container>
                    <VideoBox/>
                </Container>
            </Section>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Jeje
