import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    users: null,
    error: null,
  };

  componentDidMount() {
    this.loadUsers();
  }
  loadUsers = async () => {
    // const result = await axios.get("http://localhost:5000/api/admin");
    // this.setState({ users: result.data });
    // console.log(this.state.users);
    axios
      .get("https://skin-care-w7f1.onrender.com/api/admin")
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  deleteUser = async (id) => {
    await axios.delete(`https://skin-care-w7f1.onrender.com/api/admin/${id}`);
    this.loadUsers();
  };
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="py-4">
          <table className="table border shadow" style={{ marginLeft: 40 }}>
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(users)} */}
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.userName}</td>
                  <td>{user._id}</td>

                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewuser/${user._id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => this.deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
