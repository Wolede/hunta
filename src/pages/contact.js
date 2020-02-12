import React from 'react'
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer';
import GoogleMap from '../components/google-map/google-map';
import Header from '../components/header/header';

const Contact = () => {
    return (
        <div>
            <SEO title="Contact" />

            {/* Hero Section */}
            <Nav />

            {/* insert hero here */}
            <Header type="header-contact"/>

            {/* Google Map */}

            <GoogleMap />

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Contact
