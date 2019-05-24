import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'

const LatestUpdates = ({ data }) => {
  const { allMarkdownRemark: updates } = data
  return (
    <>
      <Helmet title="cprimel.io | Latest" />
      <div className="section-updates">
        <Sidebar />
        <div className="section-updates__container">
          <div className="section-updates__list">
            {updates.edges
              .filter(update => update.node.frontmatter.title.length > 0)
              .map(({ node: update }) => {
                return (
                  <div className="updates__preview" key={update.id}>
                    <h1>
                      <Link to={update.frontmatter.path}>
                        {update.frontmatter.title}
                      </Link>
                    </h1>
                    <h2>{update.frontmatter.date}</h2>
                    <h4>{update.frontmatter.tags}</h4>
                    <p>{update.excerpt}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestUpdates

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
