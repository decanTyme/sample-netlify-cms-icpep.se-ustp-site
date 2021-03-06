import { graphql } from "gatsby"
import AppShell from "../../components/AppShell"
import BlogCard from "../../components/BlogCard"
import { getImage } from "gatsby-plugin-image"

function BlogIndexPage({
  data: {
    allMarkdownRemark: { nodes },
  },
}) {
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

      <section className="p-3 p-md-4">
        <h3 className="mb-2">Latest News</h3>

        <div className="row">
          {nodes.slice(0, 2).map((node) => (
            <div className="col-sm-6" key={node.id}>
              <BlogCard
                collection={node.frontmatter.collection}
                path={node.path}
                date={node.frontmatter.date}
                type={node.frontmatter.type}
                excerpt={node.excerpt}
                title={node.frontmatter.title}
                thumbnail={getImage(node.frontmatter.thumbnail)}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="p-3 p-md-4">
        <h3 className="mb-2">All Blogs</h3>

        <div className="row">
          {nodes.map((node) => (
            <div className="col-sm-6" key={node.id}>
              <BlogCard
                collection={node.frontmatter.collection}
                path={node.path}
                date={node.frontmatter.date}
                type={node.frontmatter.type}
                excerpt={node.excerpt}
                title={node.frontmatter.title}
                thumbnail={getImage(node.frontmatter.thumbnail)}
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
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
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
          collection
          date
          type
          title
        }
      }
    }
  }
`

export default BlogIndexPage
