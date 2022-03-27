import { Link } from "gatsby"

const navLinks = [
  { text: "home", url: "/" },
  { text: "blog", url: "/blog" },
  { text: "about us", url: "/about" },
]

function Navbar() {
  return (
    <header className="bg-[#fff5d8]">
      <div className="container flex max-w-6xl px-4 py-4 text-lg">
        <Link
          to="/"
          className="flex grow pl-4 font-['Orbitron'] text-2xl font-[900] text-[#146082]"
        >
          iCPEP.SE
        </Link>

        <nav>
          <ul className="flex justify-center lg:mb-0">
            {navLinks.map(({ text, url }) => (
              <li key={text}>
                <Link
                  to={url}
                  className="m-2 border-b-4 border-[#ffe191] px-3 py-0 font-bold text-[#146082]"
                  activeClassName="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
