import "bootstrap/dist/css/bootstrap.css"
import "@fontsource/montserrat"
import "@fontsource/orbitron"
import "@fontsource/ubuntu"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"

function AppShell({ children }) {
  return (
    <div className="shell">
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        />
      </Helmet>
      <Navbar />

      <div className="container px-0">{children}</div>
    </div>
  )
}

export default AppShell
