import React from "react";
import picture from "./owner-image.webp";
import "./about.css";
import Footer from "../../Component/footer-component/footer";
function ImageWithDescription() {
  return (
    <div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content-section">
            <div className="about-title">
              <h1>Owner</h1>
            </div>
            <div className="about-content">
              <h3>
                Natural Skin Care Clinic is a place where a range of practices
                are // used to promote the integrity of the skin, enhance its
                appearance // and relieve skin conditions. They may include
                nutrition, the // prevention of excessive exposure to sunlight
                and the appropriate use // of emollients. Appearance-enhancing
                practices include the use of // cosmetics, botulinum,
                exfoliation, fillers, laser resurfacing, // microdermabrasion,
                peels, retinol therapy and ultrasonic skin // treatment. Skin
                care is a routine daily procedure in many settings, // such as
                skin that is either too dry or too moist, and the prevention //
                of dermatitis and the prevention of skin injury.
              </h3>
            </div>
          </div>
          <div className="about-image-section">
            <img src={picture} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImageWithDescription;
