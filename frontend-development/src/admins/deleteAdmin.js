import axios from "axios";
import React, { Component } from "react";
import Cookies from "js-cookie";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    const token = Cookies.get("token");
    axios
      .get("https://skin-care-w7f1.onrender.com/api/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  handleDeleteUser = (id) => {
    const token = Cookies.get("token");
    axios
      .delete(`https://skin-care-w7f1.onrender.com/api/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.ok) {
          const { users } = this.state;
          const updatedUsers = users.filter((user) => user.id !== id);
          this.setState({ users: updatedUsers });
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  render() {
    const { users, error } = this.state;
    if (error) {
      return <div>Error loading users: {error.message}</div>;
    }
    return (
      <div>
        <h1 style={{ marginLeft: 20 }}>User List</h1>
        <table style={{ marginLeft: 20 }}>
          <thead style={{ fontSize: 20 }}>
            <tr>
              <th>userName</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: 20 }}>
            {Array.isArray(users.response) ? (
              users.response.map((user, index) => (
                <tr key={index}>
                  <td>{user.userName}</td>
                  <td>{user._id}</td>
                  <td>
                    <button onClick={() => this.handleDeleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div>Data is not an array</div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// import axios from "axios";
// import React, { Component } from "react";

// export default class UserList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/admin")
//       .then((response) => {
//         this.setState({ users: response.data });
//         console.log(response.data);
//       })
//       .catch((error) => {
//         this.setState({ error });
//       });
//   }

//   handleDeleteUser = (id) => {
//     axios
//       .delete(`http://localhost:5000/api/admin/${id}`)
//       .then((response) => {
//         if (response.ok) {
//           const { users } = this.state;
//           const updatedUsers = users.filter((user) => user.id !== id);
//           this.setState({ users: updatedUsers });
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting user:", error);
//       });
//   };

//   render() {
//     const { users } = this.state;
//     // console.log(users);
//     return (
//       <div>
//         <h1>User List</h1>
//         <table style={{ marginLeft: 40 }}>
//           <thead>
//             <tr>
//               <th>userName</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(users.response) ? (
//               users.response.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.userName}</td>
//                   <td>
//                     <button onClick={() => this.handleDeleteUser(user.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <div>Data is not an array</div>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
