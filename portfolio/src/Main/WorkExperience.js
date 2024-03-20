import React from "react"
import "./WorkExperience.scss"
import ExperienceCard from "../component/ExperienceCard"

const WorkExperience = () => {
  const leftCard = 1
  return (
    <div className="work-experience section-padding">
      <h3 className="main-heading">My Experience</h3>
      <div className="experience-section">
        <div className="letter-height">
          <div className="circle-experience">
            <div className="connecting-line"></div>
          </div>
          <ExperienceCard />
        </div>
        <div className="letter-height">
          <div className="circle-experience">
            <div className="connecting-line"></div>
          </div>
          <ExperienceCard leftCard={leftCard} />
        </div>
        <div className="letter-height">
          <div className="circle-experience"></div>
          <ExperienceCard />
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
