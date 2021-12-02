import React from "react"
import { graphql, Link } from "gatsby"
import AppShell from "../components/AppShell"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(html)

  return (
    <AppShell>
      <Link to="/blog" className="btn m-2">
        Back to blogs
      </Link>

      <div className="px-4">
        <h1>{frontmatter.title}</h1>
        <p className="text-muted">{frontmatter.date}</p>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </AppShell>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
