import React from "react"
import "./SocialMod.scss"

const SocialMod = () => {
  return (
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
  )
}

export default SocialMod
