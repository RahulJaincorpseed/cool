import React from "react"
import HeroSection from "./HeroSection"
import MySkills from "./MySkills"
import WorkExperience from "./WorkExperience"
import Certification from "./Certification"
import ContactUs from "./ContactUs"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
     
      <Footer />
    </div>
  )
}

export default MainPage
