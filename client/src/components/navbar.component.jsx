import React from "react"
import logo from "../imgs/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" className="w-10" />
      </Link>
    </nav>
  )
}

export default Navbar
