import React, { useState } from 'react';
import Logo from '../logo/logo'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as BootNav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row
  } from 'reactstrap';
import OpenNav from './open-nav/open-nav';

const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="nav-parent">
            <Container>
                <Row>
                    <Navbar>
                        <NavbarBrand href="/">
                            <Logo logoWhite />
                        </NavbarBrand>
                        <BootNav className="text-white">
                            <NavItem>
                                <NavLink>Fb</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Tw</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>IG</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggle}> Open </NavLink>
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
    )
}

export default Nav
