import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import Section from '../components/section/section'
import { Container, Row, Col, Button } from 'reactstrap';
import GoogleMap from '../components/google-map/google-map';

const Contact = () => {
    return (
        <div>
            <SEO title="Contact" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}

            {/* Calculate Jeje Section */}
            <GoogleMap />

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Contact
