import React, { Component } from "react";
import { FaTh, FaShoppingBag, FaBars, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "./image/logo.png";
class Sidebar extends Component {
  state = {
    menuItem: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaTh />,
      },
      {
        path: "/Productlist",
        name: "All products  ",
        icon: <FaShoppingBag />,
      },

      {
        path: "/createproduct",
        name: "create products ",
        icon: <FaPlus />,
      },
      {
        path: "/addadmin",
        name: "Create admin",
        icon: <FaPlus />,
      },
      {
        path: "/servicelist",
        name: "All Services",
        icon: <FaShoppingBag />,
      },
      {
        path: "/createservice",
        name: "Create service",
        icon: <FaPlus />,
      },
    ],
  };
  render() {
    const logoContainerStyles = {
      width: "120px",
      height: "120px",
      backgroundColor: "whitesmoke",
      borderRadius: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    };

    return (
      <div className="dashboard">
        <div className="sidebar">
          <div className="top_section">
            <div style={logoContainerStyles}>
              <img src={logo} style={{ width: "100%" }} alt="logo" />
            </div>
            <div className="bars">
              <FaBars />
            </div>
          </div>
          {this.state.menuItem.map((item, index) => (
            // <div class="side-nav">
            <NavLink to={item.path} key={index} className="link">
              <div className="icon ">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
            // </div>
          ))}
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Sidebar;
