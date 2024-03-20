import React from "react"
import "./MySkills.scss"

const MySkills = () => {
  return (
    <div className="skill-section section-padding">
      <div className="py-5">
        <h3 className="main-heading">My Skills</h3>
        <div className="skills-item">
          <div className="ball-item">
            <i className="fa-brands fa-github"></i>
            <p className="skill-heading">Github</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands js-icon fa-js"></i>
            <p className="skill-heading">JavaScript</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands html-icon fa-html5"></i>
            <p className="skill-heading">HTML</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands css-icon fa-css3"></i>
            <p className="skill-heading">CSS</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands react-icon fa-react"></i>
            <p className="skill-heading">ReactJS</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands bootstrap-icon fa-bootstrap"></i>
            <p className="skill-heading">Bootstrap</p>
          </div>
          <div className="ball-item">
            <i className="fa-brands sass-icon fa-sass"></i>
            <p className="skill-heading">Sass/Scss</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills
