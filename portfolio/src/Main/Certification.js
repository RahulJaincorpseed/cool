import React from "react"
import "./Certificate.scss"
import CertificateCard from "../component/CertificateCard"

const Certification = () => {
  return (
    <div className="certificate section-padding">
      <h3 className="main-heading">My Certificate and Badges</h3>
      <div className="card-box">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </div>
  )
}

export default Certification
