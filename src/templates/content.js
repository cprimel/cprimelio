import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../components/layouts/PageLayout'

const ProjectTemplate = ({ data, location }) => {
  const { markdownRemark: project } = data
  return (
    <PageLayout location={location}>
      <div className="project">
        <div className="project__container">
          <h1 className="heading-primary">{project.frontmatter.title}</h1>
          <h3 className="project__date heading-tertiary">
            {project.frontmatter.date}
          </h3>
          <div
            className="project__content text-content"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </div>
      </div>
    </PageLayout>
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
