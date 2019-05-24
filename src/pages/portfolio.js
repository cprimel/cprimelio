import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import ProjectBoard from '../components/ProjectBoard'

// Sample data
// const projects = [
//   {
//     id: '1',
//     title: 'SFO Traffic Analysis',
//     tags: [
//       'python',
//       'pandas',
//       'keras'
//     ],
//     description: 'An analysis of LAX traffic using pandas and keras',
//     imgName: 'project1-sample.jpg'
//   },
// ]

// No graphql version
// const PortfolioPage = () => {
//   return (
//       <>
//       <Helmet title="cprimel.io | Portfolio" />
//       <Sidebar />
//       <ProjectBoard projects={ projects }/>
//       </>
//   )
// }

// export default PortfolioPage

// graphQl version
const PortfolioPage = ({ data }) => {
  const { allMarkdownRemark: projects } = data

  return (
    <>
      <Helmet title="cprimel.io | Portfolio" />
      <Sidebar />
      <ProjectBoard projects={projects.edges} />
    </>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query AllProjects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
            title
            path
            tags
            imgName
            description
          }
        }
      }
    }
  }
`
