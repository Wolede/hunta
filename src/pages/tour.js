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
            axios.get(`${baseUrl}${id}`).then(res => {
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
            duration={tour.Duration} 
            name={tour.Name} 
            city={tour.City} 
            country={tour.Country} 
            />


            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Tour
