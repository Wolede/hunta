import React from 'react'
import SEO from "../components/seo"
import { Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <SEO title="Home" />
            <h1 className="hero-text">Discover</h1>
            <Button color="hunta-red">Sup Bish</Button>
        </div>
    )
}

export default Home
