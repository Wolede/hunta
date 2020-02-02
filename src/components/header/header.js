import React from 'react'
import BackgroundImage from '../background-image/background-image'
import { Jumbotron, Container, Row, Col } from 'reactstrap';


const Header = (props) => {
    return (
        <div>
            <BackgroundImage src="beach.png" htmlTag="div" htmlClass="header-image">
                {/* <Nav /> */}
                <Jumbotron fluid className="hero-section">
                    <Container>
                        <Row>
                            
                        </Row>
                    </Container>
                </Jumbotron>
            </BackgroundImage>
        </div>
    )
}

export default Header
