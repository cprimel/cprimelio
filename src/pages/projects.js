import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../components/layouts/PageLayout'
import ProjectBoard from '../components/ProjectBoard'

const ProjectsPage = ({ data, location }) => {
  const { allMarkdownRemark: projects } = data
  return (
    <PageLayout location={location}>
      <div className="section-projects">
        <ProjectBoard projects={projects.edges} />
      </div>
    </PageLayout>
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
