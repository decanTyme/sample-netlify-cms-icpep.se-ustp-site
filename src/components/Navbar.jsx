import React from "react"
import { Link } from "gatsby"

const navLinks = [
  { text: "home", url: "/" },
  { text: "blog", url: "/blog" },
  { text: "about us", url: "/about" },
  { text: "contact us", url: "/contact" },
]

function Navbar() {
  return (
    <nav>
      <ul>
        {navLinks.map(({ text, url }) => (
          <li key={text}>
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
