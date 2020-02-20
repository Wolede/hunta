import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap';
import ImageCard from './image-card/image-card';

const ImageCards = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState();

    const baseUrl = 'https://hunta-api.herokuapp.com/tours'

    const hideLoader = () => {
        setLoading(!loading)
    }

    useEffect(() => {
        axios.get(`${baseUrl}`).then(res => {
            setTours(res.data);
            hideLoader();
        })
        .catch(error => {
            // console.log(error);
            hideLoader()
        })
    }, [])

    return (
        <Row>
            {
                loading ? (
                    <>
                    <Col sm="4" md="3">
                        <div className="loading-placeholder">
                            {/* loader here  */}
                        </div>
                    </Col>
                    <Col sm="4" md="3">
                        <div className="loading-placeholder">
                            {/* loader here  */}
                        </div>
                    </Col>
                    <Col sm="4" md="3">
                        <div className="loading-placeholder">
                            {/* loader here  */}
                        </div>
                    </Col>
                    </>
            ) 
            :
                tours ? (

                    tours.map((tour, index) => (
                        <Col sm="4" md="3" key={tour.id.toString()}>
                            <ImageCard
                            tour={tour}
                            />
                        </Col>
                    ))
                ) : 
                    <p className="text-center">
                        No Tours Yet!
                    </p>
            }
        </Row>
    )
}

export default ImageCards
