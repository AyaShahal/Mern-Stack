import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class ViewUser extends Component {
  state = {
    user: {
      username: "",
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadUser(id);
  }

  loadUser = async (id) => {
    const result = await axios.get(`https://skin-care-w7f1.onrender.com/api/admin/${id}`);
    this.setState({ user: result.data });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details</h2>
            <div className="card">
              <div className="card-header">
                Details of user id : {this.state.user.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>UserName:</b>
                    {this.state.user.username}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";
// import "../components/dashboard-admins-section/style.css";
// // import { Link } from "react-router-dom";

// export default class ViewAdmin extends Component {
//   state = {
//     data: null,
//     error: null,
//   };

//   componentDidMount() {
//     // const getAllAdmins = async () => {
//     axios
//       .get("https://skin-care-w7f1.onrender.com/api/admin")
//       .then((response) => {
//         this.setState({ data: response.data });
//         console.log(response.data);
//       })
//       .catch((error) => {
//         this.setState({ error });
//       });
//   }

//   render() {
//     const { data, error } = this.state;

//     if (error) {
//       return <div>An error occurred: {error.message}</div>;
//     }

//     if (!data) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div className="dashboard-admin-data">
//         <h2 className="refresh-hint">Refresh to get Data</h2>
//         <div className="dashboard-get-admins">
//           {Array.isArray(data.response) ? (
//             data.response.map((admin, index) => (
//               <div className="admin-card" key={admin.id || index}>
//                 <p className="admin-id">
//                   <span>ID: </span>
//                   {admin._id}
//                 </p>
//                 <p className="admin-username">
//                   <span>username: </span>
//                   {admin.userName}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <div>Data is not an array</div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
