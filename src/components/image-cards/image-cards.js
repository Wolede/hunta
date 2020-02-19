import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap';
import ImageCard from './image-card/image-card';

const ImageCards = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState();

    const baseUrl = 'http://hunta-api.herokuapp.com/tours'

    const hideLoader = () => {
        setLoading(!loading)
    }

    useEffect(() => {
        axios.get(`${baseUrl}`).then(res => {
            console.log(res);
            setTours(res.data);
            console.log(tours, "tours");        
            hideLoader();
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <Row>
            {
                loading ? (
                <div className="loading-placeholder">
                    {/* loader here  */}
                </div>
            ) 
            :
                tours.map((tour, index) => (
                    <Col sm="4" md="3">
                        <ImageCard
                        key={index}
                        tour={tour}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ImageCards
