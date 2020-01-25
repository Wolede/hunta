import React from 'react'

const Section = (props) => {
    return (
        <section id={props.id} className="hunta-section">
            {props.children}
        </section>
    )
}

export default Section
