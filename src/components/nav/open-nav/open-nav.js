import React from 'react'
import Logo from '../../logo/logo'
import {
    Nav as BootNav,
    NavItem,
  } from 'reactstrap';
import { Link } from 'gatsby';

const OpenNav = (props) => {
    return (
        <div className="open-nav">
            <div className="open-nav-menu">
                <div>
                    <Logo logoWhite />
                </div>
                <span className="close-button hunta-link" onClick={props.toggle}> x </span>
                <BootNav className="text-white">
                    <NavItem>
                        <Link to="/" className="nav-link hunta-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link hunta-link">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link hunta-link">Tours</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link hunta-link">Jeje</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link hunta-link">Contact</Link>
                    </NavItem>
                </BootNav>
            </div>
            <div className="open-nav-overlay" onClick={props.toggle} role="dialog">

            </div>
        </div>
    )
}

export default OpenNav
