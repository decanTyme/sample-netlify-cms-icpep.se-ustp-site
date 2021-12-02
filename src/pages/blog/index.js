import React from "react"
import { graphql } from "gatsby"
import AppShell from "../../components/AppShell"
import BlogCard from "../../components/BlogCard"
// import { StaticImage } from "gatsby-plugin-image"

function BlogIndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  console.log(edges[0].node)
  return (
    <AppShell>
      {/* <section className="position-relative">
        <StaticImage
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_517194189_373099.jpg"
          imgClassName="img-fluid"
          layout="fullWidth"
          aspectRatio={16 / 7}
          objectPosition="50% 10%"
          placeholder="dominantColor"
        />

        <div className="position-absolute bottom-0 end-0 bg-white p-2 mb-5">
          <p className="text-uppercase mb-0">announcement</p>
          <h2>Meet the new ICpEP officers for AY 2020-2021</h2>
          <br />
          <Link>Read more</Link>
        </div>
      </section> */}

      <section className="p-4">
        <h3>Latest News</h3>

        <div className="row">
          {edges.slice(0, 2).map((edge) => (
            <div className="col-sm-6">
              <BlogCard
                key={edge.node.id}
                path={edge.node.frontmatter.path}
                date={edge.node.frontmatter.date}
                type={edge.node.frontmatter.type}
                excerpt={edge.node.excerpt}
                title={edge.node.frontmatter.title}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h3>All Blogs</h3>

        <div className="row">
          {edges.map((edge) => (
            <div className="col-sm-6">
              <BlogCard
                key={edge.node.id}
                path={edge.node.frontmatter.path}
                date={edge.node.frontmatter.date}
                type={edge.node.frontmatter.type}
                excerpt={edge.node.excerpt}
                title={edge.node.frontmatter.title}
              />
            </div>
          ))}
        </div>
      </section>
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
            path
            date
            type
            title
          }
        }
      }
    }
  }
`

export default BlogIndexPage
