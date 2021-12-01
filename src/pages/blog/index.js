import React from "react"
import { graphql, Link } from "gatsby"
import AppShell from "../../components/AppShell"

function BlogIndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  console.log(edges)
  return (
    <AppShell>
      {edges.map((edge) => (
        <div key={edge.node.id}>
          {edge.node.excerpt}
          <Link to={edge.node.frontmatter.path}>See more</Link>
        </div>
      ))}
    </AppShell>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogIndexPage
