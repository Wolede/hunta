import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImg from 'gatsby-background-image'

const BackgroundImage = (props) => {
    const data = useStaticQuery(graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    const image = data.images.edges.find(n => {
      return n.node.relativePath.includes(props.src);
    });
    if (!image) { return null; }
    return <BackgroundImg
          Tag={props.htmlTag}
          className={`${props.htmlClass} background-image`}
          fluid={image.node.childImageSharp.fluid}
          backgroundColor={props.bgColor}
        >
            {props.children}
        </BackgroundImg>
  }
  
  export default BackgroundImage