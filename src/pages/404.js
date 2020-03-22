import React from "react"
import NotFoundSvg from "../images/404.svg"
import SEO from "../components/seo"
import { Container } from 'reactstrap';
import Section from "../components/section/section";
import { Link } from "gatsby";
import Nav from '../components/nav/nav'

const NotFoundPage = () => (
	<div>
	<SEO title="404: Not found" />
	<Nav reverse/>
	<Section id="not-found">
		<Container style={{ textAlign : 'center'  }}>
			<Container style={{ maxWidth : '600px'  }}>
				<img src={NotFoundSvg} alt="hunta-404" width="100%"/>
			</Container>
			<h1 className="h1">NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<Link to="/" className="btn btn-hunta-red">Return Home</Link>
		</Container>
	</Section>
	</div>
)

export default NotFoundPage
