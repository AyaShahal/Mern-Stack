import React, { Component } from "react";
import axios from "axios";
import UserCrud from "../pages/adminDashboard";
import { Link } from "react-router-dom";
// import Sidebar from "../../Component/Sidebar/Sidebar";
import Sidebar from "../Component/Sidebar/Sidebar";
// import "../components/dashboard-admins-section/style.css";

export default class EditAdmin extends Component {
  state = {
    users: [],
    user: {
      id: "",
      userName: "",
      password: "",
    },
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("https://skin-care-w7f1.onrender.com/api/admin")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateUser = (event) => {
    event.preventDefault();
    if (
      this.state.user.id === "" ||
      this.state.user.userName === "" ||
      this.state.user.password === ""
    ) {
      window.alert("All input required");
    } else {
      if (
        window.confirm("Are you sure you want to update this Admin?") === true
      ) {
        axios
          .put(
            `https://skin-care-w7f1.onrender.com/api/admin/${this.state.user.id}`,
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
      } else {
      }
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
    return (
      <>
        <Sidebar>
          <div className="edit-admin admin">
            <form className="admin-form">
              <input
                type="text"
                name="id"
                value={this.state.user.id}
                onChange={this.handleChange}
                placeholder="ID"
              />
              <input
                type="text"
                name="userName"
                value={this.state.user.userName}
                onChange={this.handleChange}
                placeholder="userName"
              />
              <input
                type="password"
                name="password"
                value={this.state.user.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button onClick={this.updateUser} style={{ marginBottom: 10 }}>
                Update User
              </button>
              <Link to={"/addadmin"} className="admin-button">
                Cancel
              </Link>
            </form>
            <table>
              <thead>
                <tr>
                  <th>userName</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users.response) ? (
                  users.response.map((user) => (
                    <tr key={user._id}>
                      <td>{user.userName}</td>
                      {/* <td>{user.email}</td> */}
                      <td>{user._id}</td>
                      {/* <td>
                    <Link to={<EditAdmin />}>Update</Link>
                  </td> */}
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
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default class EditUser extends Component {
//   navigate = useNavigate();

//   id = useParams().id;

//   state = {
//     user: {
//       name: "",
//       username: "",
//       email: "",
//     },
//   };

//   componentDidMount() {
//     this.loadUser();
//   }

//   loadUser = async () => {
//     const result = await axios.get(
//       `https://skin-care-w7f1.onrender.com/api/admin/${this.id}`
//     );
//     this.setState({ user: result.data });
//   };

//   onInputChange = (e) => {
//     this.setState({
//       user: { ...this.state.user, [e.target.name]: e.target.value },
//     });
//   };

//   onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(
//       `http://localhost:5000/api/admin/${this.id}`,
//       this.state.user
//     );
//     this.navigate("/");
//   };

//   render() {
//     const { name, username, email } = this.state.user;
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//             <h2 className="text-center m-4">Edit User</h2>

//             <form onSubmit={(e) => this.onSubmit(e)}>
//               <div className="mb-3">
//                 <label htmlFor="Name" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type={"text"}
//                   className="form-control"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={name}
//                   onChange={(e) => this.onInputChange(e)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="Username" className="form-label">
//                   Username
//                 </label>
//                 <input
//                   type={"text"}
//                   className="form-control"
//                   placeholder="Enter your username"
//                   name="username"
//                   value={username}
//                   onChange={(e) => this.onInputChange(e)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="Email" className="form-label">
//                   E-mail
//                 </label>
//                 <input
//                   type={"text"}
//                   className="form-control"
//                   placeholder="Enter your e-mail address"
//                   name="email"
//                   value={email}
//                   onChange={(e) => this.onInputChange(e)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-outline-primary">
//                 Submit
//               </button>
//               <Link className="btn btn-outline-danger mx-2" to="/">
//                 Cancel
//               </Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
