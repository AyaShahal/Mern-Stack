import "./footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./image/logo.png";
import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <section className="footer-content">
            <nav className="footer-nav">
              <img src={logo} style={{ width: "100px" }} alt="logo" />
              <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/service">Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </nav>
            <div className="social-icons-container ">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://whatsapp.com/">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
