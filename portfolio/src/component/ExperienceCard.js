import React from "react"
import "./ExperienceCard.scss"

const ExperienceCard = ({ leftCard }) => {
  return (
    <div className={`experience-card ${leftCard ? "left-card" : ""}`}>
      <p>
        What is a paragraph? Paragraphs are the building blocks of papers. Many
        students define paragraphs in terms of length: a paragraph is a group of
        at least five sentences, a paragraph is half a page long, etc. In
        reality, though, the unity and coherence of ideas among sentences is
        what constitutes a paragraph.
      </p>
      <div className="card-connector">
        <svg
          className="svg-image"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M18.7,-5.3C26.3,17.3,35.9,40,32.2,42.2C28.5,44.4,11.4,26,-3.9,13.1C-19.3,0.1,-33,-7.5,-32.1,-20.9C-31.2,-34.3,-15.6,-53.5,-5,-51.9C5.6,-50.2,11.1,-27.8,18.7,-5.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  )
}

export default ExperienceCard
