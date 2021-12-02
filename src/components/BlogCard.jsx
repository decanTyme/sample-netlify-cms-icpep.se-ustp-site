import React from "react"
import { formatDistanceToNow, parseISO } from "date-fns"
import { Link } from "gatsby"

function BlogCard({ path, date, type, excerpt, title }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://img.freepik.com/free-vector/people-waving-hand-illustration-concept_52683-29825.jpg?size=626&ext=jpg"
            className="img-fluid rounded-start"
            alt="..."
            width={384}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text text-uppercase mb-0 text-muted">{type}</p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{excerpt}</p>
            <p className="card-text">
              <small className="text-muted">
                Last updated {formatDistanceToNow(parseISO(date))} ago
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
