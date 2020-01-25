import React from "react"
import Home from "./home";
import Cards from '../components/cards/cards';
import '../styles/global.scss';

const IndexPage = () => (
    <div>
        <Home />
        <Cards type="card-about"/>
    </div>

)

export default IndexPage
