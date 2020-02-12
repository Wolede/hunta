import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Section from '../components/section/section';
import { Container } from 'reactstrap';
import ImageCards from '../components/image-cards/image-cards';

const Tours = () => {
    return (
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
}

export default Tours
