import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardImage = ({ imgName }) => (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return <Img className="card__image" fluid={image.node.fluid} />
    }}
  />
)

  //   <StaticQuery
//     query={graphql`
//       query ImageQuery {
//         file(relativePath: { eq: `${image}` }) {
//           id
//           childImageSharp {
//             fluid(maxWidth: 800, maxHeight: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="pickgradient">
//         <Img className="card__image" fluid={data.file.childImageSharp.fluid} />
//       </div>
//     )}
//   />
// )

export default CardImage
