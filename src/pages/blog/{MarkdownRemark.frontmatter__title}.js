import React from "react"
import { graphql, Link } from "gatsby"
import AppShell from "../../components/AppShell"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogTemplate({
  data: {
    markdownRemark: {
      thumbnail: thumbnailExt,
      frontmatter: { date, type, title, thumbnail },
      html,
      timeToRead,
    },
  },
}) {
  console.log(
    "@{MarkdownRemark.frontmatter__title}:",
    JSON.stringify(thumbnailExt, "\n\n")
  )
  return (
    <AppShell>
      <Link to="/blog" className="btn m-2">
        Back to blogs
      </Link>

      <br />

      <div className="d-flex mb-2">
        <GatsbyImage
          image={getImage(thumbnailExt || thumbnail)}
          className="mx-auto"
          imgClassName="img-fluid"
          alt={`[${type}] ${title}`}
        />
      </div>

      <div className="px-4">
        <h1>{title}</h1>
        <p className="text-muted">{date}</p>
        <small className="text-muted h6">{timeToRead} min read</small>

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
      path: gatsbyPath(filePath: "/blog/{MarkdownRemark.frontmatter__title}")
      timeToRead
      frontmatter {
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              height: 1200
              placeholder: DOMINANT_COLOR
              transformOptions: { fit: INSIDE }
            )
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
