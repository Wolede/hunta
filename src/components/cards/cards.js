import React from 'react';
import { Row } from 'reactstrap';
import Card from './card/card'
import userImageOne from "../../images/avatar-4.png"

const Cards = (props) => {
    return (
        <Row>
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
        </Row>
    )
}

export default Cards;
