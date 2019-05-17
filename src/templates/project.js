import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

const ProjectTemplate = ({ data }) => {
  const { markdownRemark: project } = data
  return (
    <div className="project-container">
      <Helmet title={`cprimel.io | ${project.frontmatter.title}`} />
      <div className="project">
        <h1>{project.frontmatter.title}</h1>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </div>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query PojectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`