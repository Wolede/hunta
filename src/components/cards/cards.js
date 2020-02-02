import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from './card/card'
import userImageOne from "../../images/avatar-4.png"

const Cards = (props) => {
    return (
        <Row>
            {props.type === 'card-hero' &&
                <>
                    <Card type={props.type} title="Tours"/>
                    <Card type={props.type} title="Flights" />
                    <Card type={props.type} title="Hotels" />
                    <Card type={props.type} title="JejePay" />
                </>
            }

            {props.type === 'card-users' &&
                <>
                    <Card type={props.type} title="Tours" image={userImageOne} name='Mrs. Emenike' location='Lagos, Nigeria'/>
                    <Card type={props.type} title="Tours" image={userImageOne} name='Ms. Ose' location='Lagos, Nigeria'/>
                    <Card type={props.type} title="Tours" image={userImageOne} name='John Smith' location='New York, U.S.A'/>
                </>
            }

            {props.type === 'card-about' &&
                <>
                   <Col sm="4"> <Card type={props.type} title="Our Vision" text="To be a leader in the travel industry by providing cost effective enhanced services, building relationships and ensuring profitability."/> </Col>
                   <Col sm="4"> <Card type={props.type} title="Our Mission" text="To build long-term relationships with our customers and clients, provide efficient service and exceptional customer service by using innovative solutions and advance technology to provide best-in-class services for business travel, management and corporate incentives."/> </Col>
                   <Col sm="4"> <Card type={props.type} title="Our Core Values" text="We believe in treating our customers with utmost regard, integrating sound advice, uncompromising quality, integrity and innovation into all aspects of our business functioning."/> </Col>
                </>
            }

        </Row>
    )
}

export default Cards;
