import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Section from '../section/section';
import call from '../../images/call.svg'
import email from '../../images/email.svg'
import { Card, CardTitle, CardText } from 'reactstrap';

const ContactBox = () => {
    return (
        <Section>
            <Container>
                <p className="text-center">Have Questions?</p>
                <h1 className="h1 text-center">Talk to Us</h1>
                <Row style={{ maxWidth: 600, margin: `auto` }}>
                    <Col sm="6">
                        <Card body style={{ backgroundColor: 'transparent', border: 'none' }} className="text-center">
                            <img src={call} alt="call icon" />
                            <CardTitle className="mt-3">Office hours: 8am - 6pm</CardTitle>
                            <CardText className="text-red">+234-14547726</CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body style={{ backgroundColor: 'transparent', border: 'none' }} className="text-center">
                            <img src={email} alt="email icon" />
                            <CardTitle className="mt-3">Email Support</CardTitle>
                            <CardText className="text-red">hello@huntagroup.com</CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ContactBox
