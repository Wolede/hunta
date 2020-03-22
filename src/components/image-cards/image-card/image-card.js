import React from 'react'
import BackgroundImage from '../../background-image/background-image'
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'gatsby';
const ImageCard = (props) => {
    // console.log(props, 'nested');
    
    return (
        <div className="image-card">
            {props.tour && (
                <Link to={`/tours/${props.tour.Slug}`} state={props.tour}>
                    <Card>
                        <BackgroundImage src="PoolSide.jpg" htmlTag="div" htmlClass="image-card-image" bgColor="#000000" regularUrl={props.tour.Cover_Image.url}></BackgroundImage>
                        <CardTitle className="text-red">{props.tour.City}, {props.tour.Country}</CardTitle>
                        <h5 className="h5">{props.tour.Name}</h5>
                    </Card>
                </Link>
            )}

            {props.experience && (
                <Card>
                    <BackgroundImage src="PoolSide.jpg" htmlTag="div" htmlClass="image-card-image" bgColor="#000000" regularUrl={props.experience.url}></BackgroundImage>
                </Card>
            )}
            
        </div>
    )
}

export default ImageCard

