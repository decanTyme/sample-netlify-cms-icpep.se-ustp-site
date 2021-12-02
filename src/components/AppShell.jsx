import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import Navbar from "./Navbar"

function AppShell({ children }) {
  return (
    <div className="shell">
      <Navbar />

      <div className="container">{children}</div>
    </div>
  )
}

export default AppShell
