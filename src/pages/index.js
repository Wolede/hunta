import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import 'bootstrap/dist/css/bootstrap.css';
import Home from "./home";
import '../styles/global.scss';

const IndexPage = () => (
  <Layout>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Home />
  </Layout>
)

export default IndexPage
