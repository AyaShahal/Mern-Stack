import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import "./Createproduct.css";
class CreateProduct extends Component {
  state = {
    image: "",
    name: "",
    price: "",
    description: "",
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.handleApi();
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);

    axios
      .post(
        "https://skin-care-w7f1.onrender.com/api/product",
        formData
        // headers: {
        //   'Content-Type': encodeURI('multipart/form-data'),
        //   'Authorization': 'Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1haGEiLCJpYXQiO…>'
        // }
      )

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Sidebar>
        <div className="addproduct">
          <div className="section-left">
            <div className="text">
              <h2>Create New Product</h2>
            </div>
          </div>
          <form className="create-form">
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={this.handleNameChange}
            />
            <br />
            <input
              type="file"
              className="form-control"
              placeholder="file"
              onChange={this.handleImageChange}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="price"
              onChange={this.handlePriceChange}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="description"
              onChange={this.handleDescriptionChange}
            />

            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-primary"
            >
              Add Product
            </button>
          </form>
        </div>
      </Sidebar>
    );
  }
}
export default CreateProduct;
