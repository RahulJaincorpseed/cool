import React from "react"
import { certificate } from "../images/images"
import "./CertificateCard.scss"
import { Link } from "react-router-dom"

const CertificateCard = () => {
  return (
    <div className="cer-card">
      <div className="cer-image">
        <img src={certificate} />
      </div>
      <div className="cer-details">
        <h4>Javascript Certicifate</h4>
        <p>22-05-2023</p>
        <div>
          <Link className="small-cm-btn" to="/">
            See Certificate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard
