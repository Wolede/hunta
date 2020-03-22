import React, { useState } from 'react';
import Logo from '../logo/logo'
import {
    Navbar,
    NavbarBrand,
    Nav as BootNav,
    NavItem,
    NavLink,
    Container,
    Row
  } from 'reactstrap';
import OpenNav from './open-nav/open-nav';
import SocialIcons from './social-icons/social-icons';
import MenuIcon from '../../images/menu-icon.svg'

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        { !props.reverse ? (
            <div className="nav-parent">
                <Container>
                    <Row>
                    <Navbar>
                        <NavbarBrand href="/">
                            <Logo logoWhite />
                        </NavbarBrand>
                        <BootNav className="text-white">
                            <SocialIcons />
                            <NavItem>
                                <NavLink onClick={toggle}> 
                                    <img src={MenuIcon} className="menu-icon" alt="menu-icon" />
                                </NavLink>
                            </NavItem>
                        </BootNav>
                    </Navbar>
                    </Row>
                </Container>
                {
                    isOpen && 
                    <OpenNav toggle={toggle} />
                }
            </div>
        ) : (
            <div className="nav-parent reverse">
                <Container>
                    <Row>
                        <Navbar>
                            <NavbarBrand href="/">
                                <Logo logoRed/>
                            </NavbarBrand>
                            <BootNav>
                                <SocialIcons />
                                <NavItem>
                                    <NavLink onClick={toggle}> 
                                        <img src={MenuIcon} className="menu-icon" alt="menu-icon" />
                                    </NavLink>
                                </NavItem>
                            </BootNav>
                        </Navbar>
                    </Row>
                </Container>
                {
                    isOpen && 
                    <OpenNav toggle={toggle} />
                }
            </div>
        )}
        </>
    )
}

export default Nav
