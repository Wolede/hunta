import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SEO from "../components/seo"
import Header from "../components/header/header"
import Nav from '../components/nav/nav'
import Section from '../components/section/section'
import BackgroundImage from '../components/background-image/background-image'
import { Container, Row, Col } from 'reactstrap';
import Cards from '../components/cards/cards';
import Footer from '../components/footer/footer';

const Tour = (props) => {
    console.log(props, "tour props");
    
    const [loading, setLoading] = useState(true);
    const [tour, setTour] = useState(props.location.state);

    console.log(tour, "tourData");
    
    const baseUrl = 'http://hunta-api.herokuapp.com/tours'
    const id = props.id

    const hideLoader = () => {
        setLoading(!loading)
    }

    useEffect(() => {

        if(!tour){
            axios.get(`${baseUrl}/${id}`).then(res => {
                console.log(res);
                setTour(res.data);
                console.log(tour, "fresh loaded tour");        
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
            duration={tour ? tour.Duration : null} 
            name={tour ? tour.Name : null} 
            city={tour ? tour.City : null} 
            country={tour ? tour.Country: null} 
            />

            {/* About Package and Activities */}
            <Section id="package-activites">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="h1">About Package</h1>
                            <p>
                                { tour ? tour.About_Package : null }
                            </p>
                        </Col>
                        <Col>
                            <h1 className="h1">Activities</h1>
                            <p>
                                { tour ? tour.Activities : null }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section id="the-experience">
                <Container>
                    <h1 className="h1">The Experience</h1>

                    {/* images here */}
                </Container>
            </Section>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Tour
