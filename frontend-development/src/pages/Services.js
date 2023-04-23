import { Component } from "react";
import Footer from "../Component/footer-component/footer";
import Service from "../../src/Component/Service/service";
import HeroSection from "../Component/HeroSectionImage/HeroSectionImage";
class service extends Component {
  render() {
    return (
      <div>
        <Service />
        <Footer />
      </div>
    );
  }
}
export default service;
