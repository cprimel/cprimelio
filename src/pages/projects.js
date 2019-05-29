import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import ProjectBoard from '../components/ProjectBoard'

const ProjectsPage = ({ data }) => {
  const { allMarkdownRemark: projects } = data

  return (
    <>
      <Helmet title="cprimel.io | Portfolio" />
      <Sidebar />
      <ProjectBoard projects={projects.edges} />
    </>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query AllProjects {
    allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(\/content\/projects)/.*\\.md$/"}}
      ) {
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
