import React from "react"
import "./Footer.scss"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="about">
        <h4 className="small-heading">About Us</h4>
        <p className="about-me">
          about my personal portfolio i am a frontend developer and i am
          interested in the design part of websie as well as the integration
          part
        </p>
      </div>
      <div className="links">
        <h4 className="small-heading">Links</h4>
        <div className="footer-link">
          <Link className="linkss" to="/">
            Home
          </Link>
          <Link className="linkss" to="/">
            project
          </Link>
          <Link className="linkss" to="/article">
            Article
          </Link>
          <Link className="linkss" to="/">
            Contact
          </Link>
          <Link className="linkss" to="/">
            About
          </Link>
        </div>
      </div>
      <div className="newsletter">
        <h4 className="small-heading">Newsletter</h4>
        <div className="email-us">
          <form>
            <input className="email-box" type="email" placeholder="Email" />
            <button className="small-cm-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="social">
        <h4 className="small-heading">Let Us be Social</h4>
        <div className="social-icons">
          <div className="icon">
            <i className="fa-brands fa-linkedin-in"></i>
            <p>Linkedin</p>
          </div>
          <div className="icon">
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
          </div>
          <div className="icon">
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </div>
          <div className="icon">
            <i className="fa-brands fa-youtube"></i>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
