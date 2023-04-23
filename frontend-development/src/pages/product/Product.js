import { Component } from "react";
import "./product.css";
import axios from "axios";
import Footer from "../../Component/footer-component/footer";

class Product extends Component {
  state = {
    data: null,
    error: null,
  };

  componentDidMount() {
    axios
      .get("https://skin-care-w7f1.onrender.com/api/product")
      .then((response) => {
        console.log(response.data);
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

    return (
      <div>
        <div className="product-page">
          <div className="product-hero">
            {/* <img src="https://i.pinimg.com/originals/4b/60/e3/4b60e39c60da383d14e64cbc7a602407.jpg"/> */}
            <div className="product-hero-text">
              <p>
                "Formulas drawn from earth’s natural phenomena. Ingredients that
                have been used for centuries.."
              </p>
            </div>
          </div>

          <div>
            <div className="product">
              <div className="gallery">
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
                            transition: "0.3s",
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
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Product;

// import image5 from './images/image5.png';
// import image2 from './images/image2.png';
// import image4 from './images/image4.png';
// import image1 from './images/image1.png';
// import { get } from "react-scroll/modules/mixins/scroller";
// import { render } from "@testing-library/react";
