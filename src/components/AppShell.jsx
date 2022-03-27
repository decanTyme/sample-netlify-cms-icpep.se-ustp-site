import "../styles/global.css"
import "@fontsource/montserrat"
import "@fontsource/orbitron"
import "@fontsource/ubuntu"
import Navbar from "./Navbar"

function AppShell({ children }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

export default AppShell
