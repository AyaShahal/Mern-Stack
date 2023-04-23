import "./header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import React, { Component } from "react";

class Header extends Component {
  render() {
    function showLinks() {
      document.querySelector(".header-links").classList.toggle("close");
    }

    return (
      <div className="header">
        <div className="header-logo">
          <img src={logo} style={{ width: "85px" }} alt="logo" />
        </div>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link className="header-login-button" to="/login">
            Login
          </Link>
        </nav>
        <div className="mobile-nav" onClick={showLinks}>
          <p></p>
          <p></p>
          <p></p>
          <div className="header-links">
            <nav className="header-mobile-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Product</Link>
              <Link to="/service">Services</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
