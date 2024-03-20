import "./App.css"
import LoginPage from "./Login/LoginPage"
import SignupPage from "./Login/SignupPage"
import AboutPage from "./Main/AboutPage"
import ArticlePage from "./Main/ArticlePage"
import ContactUs from "./Main/ContactUs"
import HeroSection from "./Main/HeroSection"
import MainPage from "./Main/MainPage"
import MainSection from "./Main/MainSection"
import ProjectPage from "./Main/ProjectPage"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>  
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} >
            <Route path="" element={<MainSection />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          {/* <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// deploy link : https://65dffe17c9dd82affa9a4d60--superb-toffee-8b65b0.netlify.app/
export default App
