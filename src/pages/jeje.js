import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Section from '../components/section/section'
import { Container } from 'reactstrap';
import VideoBox from '../components/video-box/video-box';
import Cards from '../components/cards/cards';
import Header from '../components/header/header';
import Calculate from '../components/calculate-jeje/calculate';
import ModalButton from '../components/modal/modal-button';

const Jeje = () => {
    return (
        <div>
            <SEO title="Jeje" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}
            <Header type="header-jeje" />
            {/* Calculate Jeje Section */}
            <Section id="calculate-jeje">
                <Container>
                    <h1 className="h1 mb-0 text-center">Calculate Jeje</h1>
                    <div className="text-center button-container">
                        <ModalButton
                            color="hunta-red button-container"
                            form="jeje"                        
                            >
                            Calculate
                        </ModalButton>
                    </div>
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
                    <VideoBox />
                </Container>
            </Section>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Jeje
