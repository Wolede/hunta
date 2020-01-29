import React from 'react'
import BackgroundImage from '../background-image/background-image'
import playIcon from '../../images/play-icon.svg'
import { Button } from 'reactstrap';

const VideoBox = () => {
    return (
        <BackgroundImage src="Jeje.jpg" htmlTag="div" htmlClass="video-box">
            <Button color="hunta-red" className="play-button">
                <img className="play-icon" src={playIcon} alt="play-icon" />
            </Button>
        </BackgroundImage>
    )
}

export default VideoBox
