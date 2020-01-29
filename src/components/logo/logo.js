import React from 'react'
import logoWhite from '../../images/logo-white.png'
import logoRed from '../../images/logo-red.png'

const Logo = (props) => {
    return (
        <img src={ props.logoWhite ? logoWhite : logoRed } alt="logo" className="logo" />
    )
}

export default Logo
