import React from 'react'
import BackgroundImage from '../background-image/background-image'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';


const Header = (props) => {
    return (
        <div>

            {props.type === 'header-about' &&
                <BackgroundImage src="beach.png" htmlTag="div" htmlClass="header-image">
                    {/* <Nav /> */}
                    <Jumbotron fluid className="hero-section">
                        <Container >
                            <div className="hero-section__intro">
                                <h4 className="h5 regular-weight mb-9">About Us</h4>
                                <h1 className="hero-text-2">Welcome to Hunta</h1>                                
                                    {(props.info === 'tour') ? <div>
                                        <p className='regular-weight header-p'>Duration: 3days</p> 
                                        <Button className="mt-4" color="hunta-red">Book Now</Button>
                                        </div>: null
                                    }
                            </div>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            }

        </div>
    )
}

export default Header
