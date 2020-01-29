import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container } from 'reactstrap';
import "../cards/cards.scss";
import img1 from "../../images/avatar-4.png"

const cards = (props) => {


    switch (props.type) {
        case "card-hero": return (
            <Container>
                <Card className="card--hero" body inverse>
                    <CardTitle className='card--hero__header'>Tours</CardTitle>
                    <CardText className='card--hero__body' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.
                </CardText>
                </Card>
            </Container>
        );

        case "card-users": return (
            <Container>
                <Card className="card--user">
                    <CardImg className="card--user__img" src={img1} alt="Card image cap" />
                    <CardBody className="card--user__body">
                        <CardTitle className="card--user__header">Mrs. Emenike</CardTitle>
                        <CardText className="card--user__small">
                            <small className="text-muted">Lagos, Nigeria</small>
                        </CardText>
                        <CardText className="card--user__p">" Working with Hunta on planning our family vacation for this year, was nothing short of a very efficient process.
                        From choosing the destination to visa assistance, hotel and tour arrangements, it was a seamless and stress-free process."
                        </CardText>

                    </CardBody>
                </Card>
            </Container>
        );

        case "card-about": return (
            <Container>
                <Card className="card--about" body inverse>
                    <CardTitle className='card--about__header'>Our Vision</CardTitle>
                    <CardText className='card--about__body' >To be a leader in the travel industry by providing cost effective enhanced services,
                    building relationships and ensuring profitability.
                    </CardText>
                </Card>
            </Container>
        );

        case "card-jeje": return (
            <Container>
                <Card className="card--jeje" body inverse>
                    <CardTitle className='card--jeje__no'>1</CardTitle>
                    <CardTitle className='card--jeje__header'>Register</CardTitle>
                    <CardText className='card--jeje__body' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At.
                    </CardText>
                </Card>
            </Container>
        );

    }


}

export default cards;
