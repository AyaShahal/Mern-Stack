import React, { Component } from "react";
import HeroSection from "../../Component/HeroSectionImage/HeroSectionImage";
import "./service.css";
import Servicess from "../../Component/Service/service";
import Headers from "../../Component/header/header"
import Footer from "../../Component/footer-component/footer"

class Services extends Component {
  render() {
    return (
      <>
        <Headers />
        <HeroSection />
        <Servicess />
        <Footer />
      </>
    );
  }
}
export default Services;
