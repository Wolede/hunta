import React from 'react'
import { Row, Col } from 'reactstrap';
import ImageCard from './image-card/image-card';

const ImageCards = () => {
    return (
        <Row>
            <Col sm="4" md="3">
                <ImageCard/>
            </Col>
        </Row>
    )
}

export default ImageCards
