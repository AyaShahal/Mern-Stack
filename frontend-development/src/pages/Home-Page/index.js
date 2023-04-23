import React, { Component } from "react";
import MainHero from "../../components/home-section-hero-section/index.js";
import HomePageProducts from "../../components/home-section-products/index.js";
import Footer from "../../Component/footer-component/footer.js";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <MainHero />
        <HomePageProducts />
        <Footer />
      </div>
    );
  }
}
