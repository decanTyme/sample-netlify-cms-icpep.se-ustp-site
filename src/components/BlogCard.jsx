import { formatDistanceToNow, parseISO } from "date-fns"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function BlogCard({ collection, path, date, type, excerpt, title, thumbnail }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <GatsbyImage
            image={thumbnail}
            className="overflow-auto"
            imgClassName="img-fluid rounded-start"
            alt={`[${type}] ${title}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text text-uppercase mb-1 text-muted">{type}</p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{excerpt}</p>
            <p className="card-text">
              <small className="text-muted">
                Added {formatDistanceToNow(parseISO(date))} ago
              </small>
            </p>

            <Link to={path}>See more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
