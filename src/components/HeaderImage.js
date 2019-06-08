import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "sky-palms-la_cropped.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return <Img className="image" fluid={data.file.childImageSharp.fluid} />
    }}
  />
)

export default HeaderImage
