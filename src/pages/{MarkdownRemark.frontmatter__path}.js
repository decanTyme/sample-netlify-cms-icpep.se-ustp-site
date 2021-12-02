import React from "react"
import { graphql, Link } from "gatsby"
import AppShell from "../components/AppShell"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Template({
  data: {
    markdownRemark: {
      frontmatter: { date, type, title, thumbnail },
      html,
    },
  },
}) {
  return (
    <AppShell>
      <Link to="/blog" className="btn m-2">
        Back to blogs
      </Link>

      <br />

      <div className="d-flex mb-2">
        <GatsbyImage
          image={getImage(thumbnail)}
          className="mx-auto"
          imgClassName="img-fluid"
          alt={`[${type}] ${title}`}
          width={500}
          objectPosition="50% 10%"
          objectFit="cover"
        />
      </div>

      <div className="px-4">
        <h1>{title}</h1>
        <p className="text-muted">{date}</p>

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
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              height: 500
              placeholder: DOMINANT_COLOR
              transformOptions: { fit: COVER }
            )
          }
        }
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
