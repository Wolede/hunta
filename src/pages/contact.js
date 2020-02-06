import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Section from '../components/section/section'
import { Container, Row, Col, Button } from 'reactstrap';

const Contact = () => {
    return (
        <div>
            <SEO title="Contact" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}

            {/* Calculate Jeje Section */}
            <Section id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1382351484694!2d3.473295829168533!3d6.4513919997083065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDUuMCJOIDPCsDI4JzI1LjgiRQ!5e0!3m2!1sen!2sng!4v1509655622296" height="450" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
            </Section>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Contact
