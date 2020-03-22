import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SEO from "../components/seo"
import Header from "../components/header/header"
import Nav from '../components/nav/nav'
import Section from '../components/section/section'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/footer/footer';
import ModalButton from '../components/modal/modal-button'

const Tour = (props) => {
    
    const [loading, setLoading] = useState(true);
    const [tour, setTour] = useState(props.location.state);
    console.log(tour);
    
    const slug = props.slug    
    const baseUrl = 'https://hunta-api.herokuapp.com/tours'
    
    const hideLoader = () => {
        setLoading(!loading)
    }

    useEffect(() => {

        if(!tour){
            axios.get(`${baseUrl}?Slug=${slug}`).then(res => {
                setTour(res.data[0]);  
                hideLoader();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [])

    return (
        <div>
            <SEO title="About" />
            {/* Hero Section */}
            <Nav />
            {/* insert hero here */}
            <Header 
            type="header-tour" 
            backgroundImage={tour ? tour.Cover_Image.url : null}
            duration={tour ? tour.Duration : "No duration"} 
            name={tour ? tour.Name : "No name"} 
            city={tour ? tour.City : "No city"} 
            country={tour ? tour.Country: "No country"} 
            />

            {/* About Package and Activities */}
            <Section id="package-activites">
                <Container>
                    <Row>
                        <Col md="6">
                            <h1 className="h1">About Package</h1>
                            <p>
                                { tour ? tour.About_Package : "No about information" }
                            </p>
                        </Col>
                        <Col md="6">
                            <h1 className="h1">Activities</h1>
                            <p>
                                { tour ? tour.Activities : "No activities recorded" }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section id="the-experience">
                <Container>
                    <h1 className="h1">The Experience</h1>

                    {/* images here */}

                    <div className="text-center button-container">
                        <ModalButton 
                        color="hunta-red button-container" 
                        form="tour" 
                        destination={tour ? tour.City : null} 
                        duration={tour ? tour.Duration : null} 
                        >
                            Book Now
                        </ModalButton>
                    </div>
                </Container>
            </Section>


            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Tour
