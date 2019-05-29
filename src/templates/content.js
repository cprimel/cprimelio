import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'

const ProjectTemplate = ({ data }) => {
  const { markdownRemark: project } = data
  return (
    <>
      <Helmet title={`cprimel.io | ${project.frontmatter.title}`} />
      <div className="project">
        <Sidebar />
        <div className="project__container">
          <h1 className="heading-primary">{project.frontmatter.title}</h1>
          <div
            className="project__content text-content"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
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
