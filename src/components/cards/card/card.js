import React from 'react'
import { Card as BootCard, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';

const Card = (props) => {

    switch (props.type) {
        case "card-hero": return (
            <Col sm="6">
                <a href={`#${props.scrollTo}`}>
                <BootCard className="card--hero" body inverse>
                    <CardTitle className='card--hero__header'>{props.title}</CardTitle>
                    <CardText className='card--hero__body' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.
                    </CardText>
                </BootCard>
                </a>
            </Col>
        );

        case "card-users": return (
            <Col sm="4">
                <BootCard className="card--user">
                    <CardImg className="card--user__img" src={props.image} alt="Card image cap" />
                    <CardBody className="card--user__body">
                        <CardTitle className="card--user__header">{props.name}</CardTitle>
                        <CardText className="card--user__small">
                            <small>{props.location}</small>
                        </CardText>
                        <CardText className="card--user__p">" Working with Hunta on planning our family vacation for this year, was nothing short of a very efficient process.
                        From choosing the destination to visa assistance, hotel and tour arrangements, it was a seamless and stress-free process."
                        </CardText>
                    </CardBody>
                </BootCard>
            </Col>
        );

        case "card-about": return (
            <Col sm="4">
                <BootCard className="card--about" body inverse>
                    <CardTitle className='card--about__header'>{props.title}</CardTitle>
                    <CardText className='card--about__body' >{props.text}</CardText>
                </BootCard>
            </Col>
        );

        case "card-jeje": return (
            <Col sm="3">
                <BootCard className="card--jeje" body inverse>
                    <CardTitle className='card--jeje__no'>{props.number}</CardTitle>
                    <CardTitle className='card--jeje__header'>{props.title}</CardTitle>
                    <CardText className='card--jeje__body' >{props.description}
                    </CardText>
                </BootCard>
            </Col>
        );

    }
}

export default Card
