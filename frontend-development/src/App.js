// import logo from './logo.svg';
// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Footer from "./Component/footer-component/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.js";
import HomePage from "./pages/Home-Page/index";
import About from "./pages/aboutus/about.js";
import Product from "./pages/product/Product.js";
import Services from "./pages/Services.js";
import Contact from "./pages/contactUs/contact Us.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Productlist from "./pages/productlist/Productlist.js";
import Servicelist from "./pages/servicelist/Servicelist.js";
import CreateProduct from "./pages/Createproduct/Createproduct.js";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct.js";
import Header from "./Component/header/header.js";
import CreateService from "./pages/CreateService/CreateService";
import Login from "./pages/Login-Page/index";
import EditUser from "./admins/editAdmin";
import UserCrud from "./components/dashboard-admins-section";

// import Sidebar from './Component/Sidebar/Sidebar.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/* <main style={{height: "1400px",width:"100%"}}> */}
        {/* <Sidebar> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/createservice" element={<CreateService />} />
          <Route path="/servicelist" element={<Servicelist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editadmin" element={<EditUser />} />
          <Route path="/addadmin" element={<UserCrud />} />
        </Routes>
        {/* </Sidebar> */}
        {/* <UserSearch search={this.handleSearch} /> */}

        {/* </main> */}
      </BrowserRouter>
    );
  }
}

export default App;
