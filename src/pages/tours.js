import React from 'react'
import { Router } from "@reach/router"
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Section from '../components/section/section';
import { Container } from 'reactstrap';
import ImageCards from '../components/image-cards/image-cards';
import Tour from './tour';


const Tours = () => {
    
    const ToursContent = () => (
        <div>
            <SEO title="Tours" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}
            <Header type="header-tours"/>
    
            {/* Tours Section */}
            <Section id="tours">
                <Container>
                    <h1 className="h1">All Tour Packages</h1>
                    <ImageCards/>
                </Container>
            </Section>
            {/* Footer Section */}
            <Footer />
        </div>
    )

    return (
            <Router basepath="/tours">
                <ToursContent path="/" />
                <Tour path="/:id" />
                {/* <Home path="/" /> */}
            </Router>            
    )
}

export default Tours
