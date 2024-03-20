import React from "react"
import "./ContactUs.scss"
import { Link } from "react-router-dom"
import SocialMod from "../component/SocialMod"

const ContactUs = () => {
  return (
    <div className="contact-us section-padding star-effect">
      <div className="contact-left">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="my-content content">
          <h3 className="contact-heading">Contact Us</h3>
          <div className="contact-option">
            <div className="options">
              <i className="fa-regular mr-2 fa-envelope"></i>
              <span>rahul@jain@gmail.com</span>
            </div>
            <div className="options">
              <i className="fa-regular mr-2 fa-address-book"></i>
              <span>544, moh kalyan singh noida sector 62</span>
            </div>
            <div className="options">
              <i className="fa-solid mr-2 fa-phone"></i>
              <span className="mobile">7598762836</span>
            </div>
            <div className="options">
              <i className="fa-regular mr-2 fa-clock"></i>
              <span>09:00 AM - 06:00 PM</span>
            </div>
          </div>
          <SocialMod />
        </div>
      </div>
      <div className="contact-right">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="my-content">
          <h3 className="contact-heading">Get In Touch</h3>
          <p className="contact-desc">Feel Free to drop a message</p>
          <input
            className="contact-input"
            type="text"
            placeholder="Enter Your Name*"
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Enter Your Email*"
          />
          <textarea
            className="contact-input text-area"
            placeholder="Leave a Message"
          ></textarea>
          <Link className="small-cm-btn cont-btn" to="/">
            Send Message
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
