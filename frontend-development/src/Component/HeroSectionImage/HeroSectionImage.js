import React, { Component } from "react";
import img from "../../images/Hero-Section4.png";
import "./HeroSectionImage.css"
class HeroSection extends Component {
  render() {
    return (
      <>
        <div className="Hero-section">
          <img src={img} alt="Hero-section"></img>
          <h1>Clinic Healthy Care</h1>
        </div>
      </>
    );
  }
}

export default HeroSection;
