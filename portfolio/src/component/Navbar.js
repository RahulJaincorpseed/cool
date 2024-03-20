import React, { useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  const navBar = useRef()

  const tabChange = () => {
    if (navBar.current.style.height === "auto") {
      navBar.current.style.height = "60px"
    } else {
      navBar.current.style.height = "auto"
    }
  }

  return (
    <nav ref={navBar} className="rj-navbar all-between">
      <div className="rj-logo all-center">
        <i className="fa-brands fa-codiepie"></i>
        <span>RJ</span>
      </div>
      <div className="toggle-btn" onClick={tabChange}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="res-width">
        <ul className="rj-links all-center">
          <li>
            <NavLink
              className={`rj-item  ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`rj-item  ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to={"/project"}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`rj-item  ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to={"/articles"}
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`rj-item  ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`rj-item  ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="res-nav">
        <Link className="rj-hire-btn">Hire Me</Link>
      </div>
    </nav>
  )
}

export default Navbar
