import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import "./createService.css";
class CreateService extends Component {
  state = {
    image: "",
    treatmentName: "",
    description: "",
  };

  handleNameChange = (e) => {
    this.setState({ treatmentName: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
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
    formData.append("treatmentName", this.state.treatmentName);
    formData.append("description", this.state.description);

    axios
      .post(
        "https://skin-care-w7f1.onrender.com/api/service",
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
      <>
        <Sidebar>
          <div>
            <div className="section-left">
              <div className="banner flex ">
                <div className="text">
                  <h2>
                    Dicover <br />
                    your own service
                  </h2>
                  <a href="#" className="btn">
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
            <form className="create-form">
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
                placeholder="Title"
                onChange={this.handleNameChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={this.handleDescriptionChange}
              />

              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Add Service
              </button>
            </form>
          </div>
        </Sidebar>
      </>
    );
  }
}
export default CreateService;
