import { Component } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import axios from "axios";
class UpdatedProduct extends Component {
  state = {
    // image: "",
    name: "",
    price: "",
    description: "",
    id: "",
  };

  //   // handle name change
  //   handleNameChange = (e) => {
  //     this.setState({ name: e.target.value });
  //   };
  //   // handle image change
  //   handleImageChange = (e) => {
  //     this.setState({ image: e.target.files[0] });
  //   };

  //   // handle price change
  //   handlePriceChange = (e) => {
  //     this.setState({ price: e.target.value });
  //   };

  //   // handle description change
  //   handleDescriptionChange = (e) => {
  //     this.setState({ description: e.target.value });
  //   };
  //     render() {
  //         return (
  //           <Sidebar>
  //             <div>
  //               <div className="section-left">
  //                 <div className="banner flex ">
  //                   <div className="text">
  //                     <h2>
  //                       Update <br />
  //                       your product
  //                     </h2>
  //                   </div>
  //                 </div>
  //               </div>
  //               <form className="update-form">
  //                 <br />
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="name"
  //                   value={this.state.name}
  //                   onChange={this.handleNameChange}
  //                 />
  //                 <br />
  //                 <input
  //                   type="file"
  //                   className="form-control"
  //                   placeholder="file"
  //                   onChange={this.handleImageChange}
  //                 />
  //                 <br />
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="price"
  //                   value={this.state.price}
  //                   onChange={this.handlePriceChange}
  //                 />
  //                 <br />
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   placeholder="description"
  //                   value={this.state.description}
  //                   onChange={this.handleDescriptionChange}
  //                 />
  //               </form>
  //             </div>
  //           </Sidebar>
  //         )
  //     }
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("image", this.state.image);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);

    axios
      .patch(`https://skin-care-w7f1.onrender.com/api/product/${this.state.id}`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Sidebar>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          {/* <input type="file"   placeholder="file" onChange={(e) => this.setState({ image: e.target.files[0] })} /> */}
          <input
            type="text"
            placeholder="price"
            value={this.state.price}
            onChange={(e) => this.setState({ price: e.target.value })}
          />
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </Sidebar>
    );
  }
}
export default UpdatedProduct;
