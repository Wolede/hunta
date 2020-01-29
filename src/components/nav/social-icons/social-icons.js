import React from 'react'
import FacebookIcon from '../../../images/facebook.svg'
import TwitterIcon from '../../../images/twitter.svg'
import InstagramIcon from '../../../images/instagram.svg'
import { NavItem, NavLink } from 'reactstrap'

const SocialIcons = () => {
    return (
        <>
            <NavItem className="social-icon">
                <NavLink href="">
                    <img src={InstagramIcon} alt="ig-icon"/>
                </NavLink>
            </NavItem>
            <NavItem className="social-icon">
                <NavLink href="">
                    <img src={TwitterIcon} alt="tw-icon"/>
                </NavLink>
            </NavItem>
            <NavItem className="social-icon">
                <NavLink href="">
                    <img src={FacebookIcon} alt="fb-icon"/>
                </NavLink>
            </NavItem>
        </>
    )
}

export default SocialIcons
