import React, { Component } from "react";
import "../Login-Page/style.css";
import image3 from "../../images/login-page-image-3.webp";
import axios from "axios";
import Cookies from "js-cookie";
// import Dashboard from "../Dashboard";
// import Dashboard from "../Dashboard/sidebar";
import Dashboard from "../Dashboard/Dashboard";

export default class Login extends Component {
  state = {
    userName: "",
    password: "",
    isAuthenticated: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const userName = target.name;

    this.setState({
      [userName]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName === "" || this.state.password === "") {
      window.alert("All inputs are required");
    } else {
      axios
        .post("https://skin-care-w7f1.onrender.com/api/admin/login", {
          userName: this.state.userName,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            // console.log(res.status);
            window.alert("Login successful");
            // <Dashboard />;
            // Cookies.set("token", res.data.token);
            // Save the token in local storage or perform any other action based on the response
            // ...
            this.setState({ isAuthenticated: true });
          }
          // <Dashboard />;
        })
        .catch((error) => {
          // console.log(error.response.data);
          window.alert(error.response.data);
          console.error(error);
        });
    }
  };
  render() {
    const { isAuthenticated } = this.state;

    return (
      <div>
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <div className="wrapper">
            <div className="login-container">
              <div className="login-content">
                <div className="login-logo">Skin Care</div>
                <div className="login-title">
                  <h2>Welcome</h2>
                  <p>Login and controll your website</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="login-inputs">
                    <input
                      type="text"
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                      required={true}
                      placeholder="Username"
                      id="username"
                    />
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      required={true}
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                  <div className="login-buttons">
                    {/* <button>CREATE ACCOUNT</button> */}
                    <button type="submit">LOG IN</button>
                  </div>
                </form>
              </div>
              <div className="login-image">
                <img src={image3} />
              </div>
            </div>
            <svg
              className="login-page-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              preserveAspectRatio="xMidYMax slice"
              viewBox="0 0 1600 900"
            >
              <defs>
                <linearGradient id="bg">
                  <stop
                    offset="0%"
                    stopColor="rgba(255, 255, 255, 0.06)"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgba(255, 255, 255, 0.6)"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgba(255, 255, 255, 0.2)"
                  ></stop>
                </linearGradient>
                <path
                  id="wave"
                  fill="url(#bg)"
                  d="M-363.852 502.589s236.988-41.997 505.475 0 371.981 38.998 575.971 0 293.985-39.278 505.474 5.859 493.475 48.368 716.963-4.995v560.106H-363.852v-560.97z"
                ></path>
              </defs>
              <use opacity="0.3" xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  calcMode="spline"
                  dur="10s"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  keyTimes="0; .5; 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="270 230; -334 180; 270 230"
                ></animateTransform>
              </use>
              <use opacity="0.6" xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  calcMode="spline"
                  dur="8s"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  keyTimes="0; .6; 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="-270 230;243 220;-270 230"
                ></animateTransform>
              </use>
              <use xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  calcMode="spline"
                  dur="6s"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  keyTimes="0; .4; 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 230;-140 200;0 230"
                ></animateTransform>
              </use>
            </svg>
          </div>
        )}
      </div>
    );
  }
}
