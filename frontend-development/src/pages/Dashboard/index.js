import React, { Component } from "react";
import DashboardAdmins from "../../components/dashboard-admins-section";
import AddUser from "../../admins/addAdmin";
import Navbar from "../../components/dashboard-admin-navbar";
import Home from "../adminHome";
import ViewUser from "../../admins/viewAdmin.js";
import EditUser from "../../admins/editAdmin";
import UserList from "../../admins/deleteAdmin";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import {
  BiChevronRight,
  BiHomeAlt,
  BiUser,
  BiShoppingBag,
  BiLogOut,
  BiMoon,
  BiSun,
} from "react-icons/bi";

import { FaWhmcs } from "react-icons/fa";
import ViewAdmin from "../../admins/viewAdmin.js";
export default class Dashboard extends Component {
  render() {
    function close() {
      document.querySelector("nav").classList.toggle("close");
    }

    const body = document.querySelector("body");
    const modeText = body.querySelector(".mode-text");

    function darkLightMode() {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    }

    return (
      <body>
        <nav className="sidebar close">
          <header>
            <div className="image-text">
              <span className="image">
                <img src={logo} alt="" />
              </span>

              <div className="text logo-text">
                <span className="name">BLOOM</span>
                <span className="profession">Skin care Clinic</span>
              </div>
            </div>

            <i className="toggle" onClick={close}>
              <BiChevronRight />
            </i>
          </header>

          <div className="menu-bar">
            <div className="menu">
              {/* <li className="search-box">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search..." />
              </li> */}

              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i className="icon">
                      <BiHomeAlt />
                    </i>
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="icon">
                      <BiShoppingBag />
                    </i>
                    <span className="text nav-text">Products</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="icon">
                      <FaWhmcs />
                    </i>
                    <span className="text nav-text">Services</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="icon">
                      <BiUser />
                    </i>
                    <span className="text nav-text">Admins</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="">
                <a href="#">
                  <i className="icon">
                    <BiLogOut />
                  </i>
                  <span className="text nav-text">Logout</span>
                </a>
              </li>

              <li className="mode">
                <div className="sun-moon">
                  <i className="icon moon">
                    <BiMoon />
                  </i>
                  <i className="icon sun">
                    <BiSun />
                  </i>
                </div>
                <span className="mode-text text">Dark mode</span>

                <div className="toggle-switch" onClick={darkLightMode}>
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>

        <section className="admins">
          {/* <div className="text">Dashboard Sidebar</div> */}
          {/* <DashboardAdmins /> */}
          {/* <AddAdmin /> */}
          {/* <ViewAdmin /> */}
          {/* <UserList /> */}
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/adduser" element={<AddUser />} />
              <Route exact path="/edituser/:id" element={<EditUser />} />
              <Route exact path="/viewuser/:id" element={<ViewUser />} />
            </Routes>
          </Router>
        </section>
      </body>
    );
  }
}
