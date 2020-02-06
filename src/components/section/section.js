import React from 'react'
import BackgroundImage from '../background-image/background-image'

const Section = (props) => {
    return (
        <div>
            {
                props.fullwidth ? (
                    <BackgroundImage src={props.backgroundImage} htmlTag="div" htmlClass="section-background">
                        <section id={props.id} className="hunta-section">
                            {props.children}
                        </section>
                    </BackgroundImage>
                ) : (
                    <section id={props.id} className={props.darkBackground ? 'hunta-section dark-background' : 'hunta-section'}>
                        {props.children}
                    </section>
                )

            }
        </div>
    )
}

export default Section
