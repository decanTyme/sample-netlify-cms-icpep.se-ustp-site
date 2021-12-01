import React from "react"
import Navbar from "./Navbar"

function AppShell({ children }) {
  return (
    <div className="shell">
      <Navbar />

      {children}
    </div>
  )
}

export default AppShell
