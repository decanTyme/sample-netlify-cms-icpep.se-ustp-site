import "@fontsource/orbitron"
import React from "react"
import { Link } from "gatsby"

const navLinks = [
  { text: "home", url: "/" },
  { text: "blog", url: "/blog" },
  { text: "about us", url: "/about" },
]

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FFF5D8" }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand ms-2 d-flex align-content-center"
          style={{
            color: "#146082",
            fontFamily: "Orbitron",
            fontWeight: 900,
          }}
        >
          iCPEP.SE
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded={false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarToggler"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 me-5 justify-content-center">
            {navLinks.map(({ text, url }) => (
              <li key={text} className="nav-item">
                <Link
                  to={url}
                  className="nav-link px-3 py-0 m-2 border-5"
                  activeClassName="active"
                  style={{
                    color: "#146082",
                    fontWeight: 700,
                    borderBottom: "1px solid #FFE191",
                  }}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
