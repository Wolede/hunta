import React from 'react';
import { Row } from 'reactstrap';
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
        </Row>
    )
}

export default Cards;
