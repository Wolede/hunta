import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from './card/card'
import userImageOne from "../../images/avatar-4.png"

const Cards = (props) => {
    return (
        <Row className="hunta-cards">
            {props.type === 'card-hero' &&
                <>
                    <Card type={props.type} title="Tours" scrollTo="tours" />
                    <Card type={props.type} title="Flights" scrollTo="flights" />
                    <Card type={props.type} title="Hotels" scrollTo="hotels" />
                    <Card type={props.type} title="JejePay" scrollTo="jeje" />
                </>
            }

            {props.type === 'card-users' &&
                <>
                    <Card type={props.type} image={userImageOne} name='Mrs. Emenike' location='Lagos, Nigeria'/>
                    <Card type={props.type} image={userImageOne} name='Ms. Ose' location='Lagos, Nigeria'/>
                    <Card type={props.type} image={userImageOne} name='John Smith' location='New York, U.S.A'/>
                </>
            }

            {props.type === 'card-jeje' &&
                <>
                    <Card type={props.type} title="Register" number="1" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At." />
                    <Card type={props.type} title="Pay 25%" number="2" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At." />
                    <Card type={props.type} title="Pay the Rest" number="3" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At." />
                    <Card type={props.type} title="Travel" number="4" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At." />
                </>

            }
            {props.type === 'card-about' &&
                <>
                   <Card type={props.type} title="Our Vision" text="To be a leader in the travel industry by providing cost effective enhanced services, building relationships and ensuring profitability."/>
                   <Card type={props.type} title="Our Mission" text="To build long-term relationships with our customers and clients, provide efficient service and exceptional customer service by using innovative solutions and advance technology to provide best-in-class services for business travel, management and corporate incentives."/>
                   <Card type={props.type} title="Our Core Values" text="We believe in treating our customers with utmost regard, integrating sound advice, uncompromising quality, integrity and innovation into all aspects of our business functioning."/>
                </>
            }

        </Row>
    )
}

export default Cards;
