import React from 'react'

const Tour = (props) => {
    console.log(props, "tour props");
    
    return (
        <div>
            tour page with id = {props.id}
        </div>
    )
}

export default Tour
