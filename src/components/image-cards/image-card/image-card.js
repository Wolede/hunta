import React from 'react'
import BackgroundImage from '../../background-image/background-image'
import { Card, CardTitle } from 'reactstrap';
// import PoolSide from '../../../images/PoolSide.jpg'
const ImageCard
 = () => {
    return (
        <div className="image-card">
            <Card>
                {/* <CardImg top width="100%" src={PoolSide} alt="Card image cap" className="image-card-image"/> */}
                <BackgroundImage src="PoolSide.jpg" htmlTag="div" htmlClass="image-card-image" bgColor="#000000"></BackgroundImage>
                <CardTitle className="text-red">SOUTH AFRICA</CardTitle>
                <h5 className="h5">A Family Trip to Cape Town</h5>
            </Card>
        </div>
    )
}

export default ImageCard

