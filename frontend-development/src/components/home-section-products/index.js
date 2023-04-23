import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
// import "../../pages/product/product.css";
import axios from "axios";
// import product1 from "../../images/product-image-1.jpeg";
// import product2 from "../../images/product-image-2.jpeg";
// import product3 from "../../images/product-image-3.jpeg";
// import product4 from "../../images/product-image-4.jpeg";
// import product5 from "../../images/product-image-5.jpeg";

export default class HomePageProducts extends Component {
  state = {
    data: null,
    error: null,
  };

  componentDidMount() {
    axios
      .get("https://skin-care-w7f1.onrender.com/api/product")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <section className="home-section-product">
        <div className="home-section-gallery">
          <Carousel
            className="product-carousel"
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlaySpeed={5000}
            swipeable={true}
          >
            {Array.isArray(data.response) ? (
              data.response.map((product, index) => (
                <div className="content" key={product.id || index}>
                  <div className="product-card-image">
                    <img
                      src={"https://skin-care-w7f1.onrender.com/" + product.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-card-description">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className="product-card-button">
                      ${product.price}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>Data is not an array</div>
            )}
          </Carousel>
        </div>
      </section>
    );
  }
}
