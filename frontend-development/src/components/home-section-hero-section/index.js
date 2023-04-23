import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import image1 from "../../images/carousel-image-1.jpg";
import image2 from "../../images/carousel-image-2.jpg";
import image3 from "../../images/carousel-image-3.jpg";

import Image1 from "../../images/image-1.jpg";
import Image2 from "../../images/image-2.jpg";
import Image3 from "../../images/image-3.jpg";

export default class MainHero extends Component {
  render() {
    // const carousel = document.getElementById("carousel");
    // const next = document.getElementById("next");
    // const prev = document.getElementById("previous");

    // next.addEventListener("click", () => {
    //   carousel.style.translateX = "100px";
    //   console.log("working");
    // });

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <Carousel
        className="carousel"
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={5000}
        swipeable={true}
      >
        <div className="carousel__item">
          <img
            src={image1}
            alt="Skin Care Product"
            className="carousel__image"
          />
          <div className="carousel-title">
            <h2>Our Products</h2>
            <p>Discover our new exclusive Products</p>
          </div>
        </div>
        <div className="carousel__item">
          <img
            src={image2}
            alt="Skin Care Product"
            className="carousel__image"
          />
          <div className="carousel-title color">
            <h2>Our Products</h2>
            <p>Discover our new exclusive Products</p>
          </div>
        </div>
        <div className="carousel__item">
          <img
            src={image3}
            alt="Skin Care Product"
            className="carousel__image"
          />
          <div className="carousel-title">
            <h2>Our Products</h2>
            <p>Discover our new exclusive Products</p>
          </div>
        </div>
      </Carousel>
    );
  }
}
