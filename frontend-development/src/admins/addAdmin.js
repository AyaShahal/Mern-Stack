import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.username]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    await axios.post("https://skin-care-w7f1.onrender.com/api/admin", this.state);
    this.props.history.push("/");
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>

            <form onSubmit={this.onSubmit}>
              {/* <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={this.onInputChange}
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  passowrd
                </label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// import axios from "axios";
// import React, { Component } from "react";
// import "../components/dashboard-admins-section/style.css";
// export default class DashboardAdmins extends Component {
//   state = {
//     data: null,
//     username: "",
//     password: "",
//     error: null,
//   };

//   render() {
//     const addAdmin = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post(
//           "https://skin-care-w7f1.onrender.com/api/admin/register",
//           {
//             userName: this.state.username,
//             password: this.state.password,
//           }
//         );

//         console.log(res);
//         this.setState({ username: "", password: "" });
//       } catch (err) {
//         console.log(err);
//         this.setState({ error: err });
//       }
//     };

//     function showPass() {
//       var password = document.getElementById("adminPassword");
//       if (password.type === "password") {
//         password.type = "text";
//       } else {
//         password.type = "password";
//       }
//     }

//     return (
//       <>
//         <div className="dashboard-admin-controller">
//           <form className="dashboard-admin-form" onSubmit={(e) => addAdmin(e)}>
//             <div className="admin-username">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 onChange={(e) => {
//                   this.setState({ username: e.target.value });
//                   console.log(this.state.username);
//                 }}
//                 value={this.state.username}
//               />
//             </div>
//             <div className="admin-password">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 id="adminPassword"
//                 onChange={(e) => {
//                   this.setState({ password: e.target.value });
//                   console.log(this.state.password);
//                 }}
//                 value={this.state.password}
//               />
//               <input type="checkbox" onClick={showPass} />
//             </div>
//             <div className="admin-buttons">
//               <button type="submit" className="admin-add-button">
//                 ADD
//               </button>
//             </div>
//           </form>
//         </div>
//       </>
//     );
//   }
// }
