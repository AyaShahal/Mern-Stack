import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";

import "./style.css";
// import Dashboard from "./Dashboard/sidebar";
// import EditAdmin from "../admins/editAdmin";

export default class UserCrud extends Component {
  state = {
    users: [],
    user: {
      userName: "",
      password: "",
    },
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("http://localhost:5000/api/admin")
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  addUser = (event) => {
    event.preventDefault();
    if (this.state.user.userName === "" || this.state.user.password === "") {
      window.alert("All input required");
    } else {
      if (window.confirm("Are you sure you want to add this Admin") === true) {
        axios
          .post("http://localhost:5000/api/admin/register", this.state.user)
          .then((response) => {
            this.setState({
              users: [...this.state.users, response.data],
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
      }
    }
  };

  updateUser = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/admin/${this.state.user.id}`,
        this.state.user
      )
      .then((response) => {
        const updatedUsers = this.state.users.map((user) => {
          if (user.id === response.data.id) {
            return response.data;
          }
          return user;
        });
        this.setState({
          users: updatedUsers,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete") === true) {
      axios
        .delete(`http://localhost:5000/api/admin/${userId}`)
        .then((response) => {
          const filteredUsers = this.state.users.filter(
            (user) => user.id !== userId
          );
          this.setState({
            users: filteredUsers,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
    }
  };

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <>
        <Sidebar>
          <div className="admin-crud admin">
            <form className="admin-form">
              <input
                type="text"
                name="userName"
                required
                value={this.state.user.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
              <input
                type="password"
                name="password"
                required
                value={this.state.user.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button onClick={this.addUser} style={{ marginBottom: 10 }}>
                Add User
              </button>
              <Link to={"/editadmin"} className="admin-button">
                Update User
              </Link>
            </form>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users.response) ? (
                  users.response.map((user) => (
                    <tr key={user._id}>
                      <td>{user.userName}</td>
                      {/* <td>{user.email}</td> */}
                      <td>
                        <button
                          style={{ marginRight: "100px" }}
                          onClick={() => this.deleteUser(user._id)}
                        >
                          Delete
                        </button>
                        {/* </td>
                      <td> */}
                        <Link to={"/editadmin"} className="admin-button">
                          Update
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>data is not an array</div>
                )}
              </tbody>
            </table>
          </div>
        </Sidebar>
      </>
    );
  }
}

// import axios from "axios";
// import React, { Component } from "react";
// import "./style.css";
// export default class DashboardAdmins extends Component {
//   state = {
//     data: null,
//     username: "",
//     password: "",
//     error: null,
//   };

//   componentDidMount() {
//     // const getAllAdmins = async () => {
//     axios
//       .get("http://localhost:5000/api/admin")
//       .then((response) => {
//         this.setState({ data: response.data });
//         console.log(response.data);
//       })
//       .catch((error) => {
//         this.setState({ error });
//       });
//   }
//   // getAllAdmins();

//   render() {
//     const addAdmin = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/admin/register",
//           {
//             userName: this.state.username,
//             password: this.state.password,
//           }
//         );

//         console.log(res);
//         this.setState({ username: "", password: "" });
//       } catch (err) {
//         console.log(err);
//         this.setState({ error });
//       }
//     };

//     const deleteAdmin = async (id) => {
//       try {
//         const res = await axios.delete(`http://localhost:5000/api/admin/${id}`);
//         console.log(res.data);
//         alert("user deleted successfully");
//       } catch (err) {
//         console.log(err);
//         this.setState({ error });
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

//     const { data, error } = this.state;

//     if (error) {
//       return <div>An error occurred: {error.message}</div>;
//     }

//     if (!data) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <>
//         <div className="dashboard-admin-controller">
//           <form className="dashboard-admin-form" onSubmit={(e) => addAdmin(e)}>
//             <div className="admin-id">
//               <input type="text" placeholder="Admin ID" />
//             </div>
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
//               <button className="admin-edit-button">EDIT</button>
//               <button
//                 className="admin-delete-button"
//                 onClick={() => {
//                   deleteAdmin(this.state.data._id);
//                 }}
//                 value={this.state.data._id}
//               >
//                 DELETE
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="dashboard-admin-data">
//           <h2 className="refresh-hint">Refresh to get Data</h2>
//           <div className="dashboard-get-admins">
//             {Array.isArray(data.response) ? (
//               data.response.map((admin, index) => (
//                 <div className="admin-card" key={admin.id || index}>
//                   <p className="admin-id">
//                     <span>ID: </span>
//                     {admin._id}
//                   </p>
//                   <p className="admin-username">
//                     <span>username: </span>
//                     {admin.userName}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <div>Data is not an array</div>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
