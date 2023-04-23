import React, { Component } from "react";
import "./Productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
// import UpdatedProduct from './UpdateProduct/UpdateProduct.js'
// import DeleteData from "../../Component/Deleteproduct/Deleteproduct";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      image: "",
      name: "",
      price: "",
      description: "",
      id: "", // added id to the state
      isLoading: true,
    };
  }

  componentDidMount() {
    // get product
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

  // delete product
  handleDelete = (id) => {
    axios
      .delete(`https://skin-care-w7f1.onrender.com/api/product/${id}`)
      .then((response) => console.log("deleted", response))
      .catch((err) => console.log(err));
  };
  // handleImageChange = (e) => {
  //   this.setState({ name: e.target.value });
  // };
  // // handle image change
  // handleImageChange = (e) => {
  //   this.setState({ image: e.target.files[0] });
  // };

  // // handle price change
  // handlePriceChange = (e) => {
  //   this.setState({ price: e.target.value });
  // };

  // // handle description change
  // handleDescriptionChange = (e) => {
  //   this.setState({ description: e.target.value });
  // };

  // handle submit
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", this.state.image);
  //   formData.append("name", this.state.name);
  //   formData.append("description", this.state.description);
  //   formData.append("price", this.state.price);

  //   axios
  //     .patch(`http://localhost:5000/api/product/${this.state.id}`, formData)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  handleUpdate = (id) => {
    // get the product you want to update
    const product = this.state.data.find((p) => p._id === id);

    // set the state with the product's data
    this.setState({
      id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
    });
  };

  // update product
  handleUpdate = (id) => {
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);

    axios
      .put(`https://skin-care-w7f1.onrender.com/api/product/${id}`, formData)
      .then((response) => {
        console.log("product updated", response);
        // you can update the state with the updated data here
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }
    const { product } = this.props;
    const { isLoading } = this.state;
    return (
      <Sidebar>
        <div className="dashboard-content">
          {/* <div className="topbar flex flex-sb"> */}
          {/* <div className="search flex">
            <div className="searchicon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type="text" placeholder=" Search any collection" />
          </div>
          <div className="section flex ">
          <div className="section-left"> */}

          <div className="text">
            <h1>
              Discover <br />
              your own product
            </h1>
          </div>

          <div className="nfts">
            {/* <div className="heading ">
                <h2>Products</h2>
                <p>See all</p>
              </div> */}

            <section className="categories">
              <div className="category flex">
                {Array.isArray(data.response) ? (
                  data.response.map((product, index) => (
                    <div className="show" key={product.id || index}>
                      <div className="product-card">
                        <img
                          src={"https://skin-care-w7f1.onrender.com/" + product.image}
                          style={{
                            width: "100%",
                            height: "230px",
                            objectFit: "cover",
                            // objectPosition: "absolute",
                            // objectPosition:'-20px 20px',
                          }}
                          alt={product.name}
                        />
                        <div style={{ padding: "20px" }}>
                          <h3>{product.name}</h3>
                          <h3>${product.price}</h3>
                          <p>{product.description}</p>

                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => this.handleDelete(product._id)}
                            color="#537f71"
                          />

                          {/* <NavLink to='/updateproduct'> <FontAwesomeIcon icon={faEdit} color="#537f71" onClick={() => this.handleUpdate(product._id)}></FontAwesomeIcon></NavLink> */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Data is not an array</div>
                )}
              </div>
            </section>

            {/* <main>{this.props.children}</main> */}
          </div>
        </div>
      </Sidebar>
    );
  }
}
export default ProductList;
