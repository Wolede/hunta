import React from 'react'
import BackgroundImage from '../background-image/background-image'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import Form from '../form/form';


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
                                    {/* {(props.info === 'tour') ? <div>
                                        <p className='regular-weight header-p'>Duration: 3days</p> 
                                        <Button className="mt-4" color="hunta-red">Book Now</Button>
                                        </div>: null
                                    } */}
                            </div>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            }

            {props.type === 'header-contact' && 
                <BackgroundImage src="beach.png" htmlTag="div" htmlClass="header-image">
                    {/* <Nav /> */}
                    <Jumbotron fluid className="hero-section hero-contact">
                        <Container>
                            <Row>
                                <Col className="hero-content" md="6">
                                    <h1 className="hero-text text-white">Contact</h1>
                                    <p>
                                        Address: 10b1, Sarumoh Oladosu Close, Off Shakiru Anjorin Street Lekki Phase 1, Lagos, Nigeria 
                                    </p>
                                    <p>
                                        Office hours are 8am - 6pm on Weekdays Travel consultants are available from 7am - 10pm on Weekdays, 10am - 5pm on Saturday and 12pm - 5pm on Sundays
                                    </p>
                                    <p>
                                        Email: hello@huntagroup.com 
                                        <br/>
                                        Phone: +234-14547726
                                    </p>
                                </Col>
                                <Col className="hero-form" md="6">
                                    <Form 
                                    title="Leave us a message" 
                                    subjectTitle="Contact Reaching out"
                                    firstName
                                    lastName
                                    emailAddress
                                    phoneNumber
                                    message
                                    buttonText="Send"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            }

            {props.type === 'header-jeje' && 
                <BackgroundImage src="jeje-big.jpg" htmlTag="div" htmlClass="header-image">
                    {/* <Nav /> */}
                    <Jumbotron fluid className="hero-section">
                        <Container>
                            <Row>
                                <Col className="hero-content" md="6">
                                    <h1 className="hero-text text-white">Pay with Jeje</h1>
                                    <p>
                                        Don't have the funds for your ticket just yet, but don't want to risk paying for expensive last minute airfare? Hunta Pay with Jeje package is a flexible installment travel payment plan that allows you to make only 25% down payment of the travel cost and pay the rest in convenient instalments. 
                                    </p>
                                    <p>
                                        You can lock down our exclusive and great travel and ticket deals through the Pay with Jeje option. A 25% deposit will be due within 24 hours of booking. This deposit locks in the exclusive price of your ticket provided full payment is made before departure date. 
                                    </p>
                                    <p>
                                        This package will only be available to customers who book at least two weeks before their travel date. Pay with Jeje transactions must be inclusive of flight (i.e. flights only, flights + activities, flights + hotels).
                                    </p>
                                </Col>
                                <Col className="hero-form" md="6">
                                    <Form 
                                    title="Register for Jeje" 
                                    subjectTitle="Jeje Registration"
                                    firstName
                                    lastName
                                    emailAddress
                                    phoneNumber
                                    destination
                                    flightDate
                                    ticketPrice
                                    buttonText="Register"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            }

            {props.type === 'header-tours' && 
                <BackgroundImage src="beach.png" htmlTag="div" htmlClass="header-image">
                    {/* <Nav /> */}
                    <Jumbotron fluid className="hero-section">
                        <Container>
                            <Row>
                                <Col className="hero-content" md="6">
                                    <h1 className="hero-text text-white">Tours</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At. 
                                    </p>
                                </Col>
                                <Col className="hero-form" md="6">
                                    <Form 
                                    title="All Tour Packages" 
                                    subjectTitle="Custom Tour Package Request"
                                    firstName
                                    lastName
                                    emailAddress
                                    phoneNumber
                                    noOfAdults
                                    noOfChildren
                                    noOfActivities
                                    duration
                                    destination
                                    budgetInNaira
                                    buttonText="Start Conversation"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            }

        </div>
    )
}

export default Header
