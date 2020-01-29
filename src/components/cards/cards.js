import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from './card/card'

const Cards = (props) => {
    return (
        <Row>
            <Card type={props.type} />
            <Card type={props.type} />
            <Card type={props.type} />
            <Card type={props.type} />
        </Row>
    )
}

export default Cards;
