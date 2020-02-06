import React from 'react'
import BackgroundImage from '../background-image/background-image'
import playIcon from '../../images/play-icon.svg'
import ModalButton from '../modal/modal-button';

const VideoBox = () => {
    return (
        <BackgroundImage src="Jeje.jpg" htmlTag="div" htmlClass="video-box">
            <ModalButton color="hunta-red" className="play-button" video>
                <img className="play-icon" src={playIcon} alt="play-icon" />
            </ModalButton>
        </BackgroundImage>
    )
}

export default VideoBox
