import React from 'react'
import { Link, graphql } from 'gatsby'
import PageLayout from '../components/layouts/PageLayout'

const UpdatesPage = ({ data, location }) => {
  const { allMarkdownRemark: updates } = data
  return (
    <PageLayout location={location}>
      <div className="section-updates">
        <div className="section-updates__container">
          <div className="section-updates__list">
            {updates.edges
              .filter(update => update.node.frontmatter.title.length > 0)
              .map(({ node: update }) => {
                return (
                  <div className="section-updates__preview" key={update.id}>
                    <h2 className="section-updates__title heading-secondary">
                      <Link
                        to={update.frontmatter.path}
                        state={{ fromHome: false }}
                      >
                        {update.frontmatter.title}
                      </Link>
                    </h2>
                    <h3 className="section-updates__date heading-tertiary">
                      {update.frontmatter.date}
                    </h3>
                    <p className="section-updates__excerpt text-content">
                      {update.excerpt}
                    </p>
                    <Link
                      className="link-text"
                      to={update.frontmatter.path}
                      state={{ fromHome: false }}
                    >
                      Further reading &rarr;
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default UpdatesPage

export const pageQuery = graphql`
  query AllUpdates {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/(\/content\/updates)/.*\\.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            id
            date(formatString: "MMMM DD, YYYY")
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
