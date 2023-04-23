import React, { Component } from "react";
import "../productlist/Productlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Sidebar from "../../Component/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
// import UpdatedProduct from './UpdateProduct/UpdateProduct.js'
// import DeleteData from "../../Component/Deleteproduct/Deleteproduct";
class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      image: "",
      treatmentName: "",
      description: "",
      id: "", // added id to the state
      isLoading: true,
    };
  }

  componentDidMount() {
    // get product
    axios
      .get("https://skin-care-w7f1.onrender.com/api/service")
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  // delete product
  handleDelete = (id) => {
    axios
      .delete(`https://skin-care-w7f1.onrender.com/api/service/${id}`)
      .then((response) => console.log("deleted", response))
      .catch((err) => console.log(err));
  };
  // handleImageChange = (e) => {
  //   this.setState({ name: e.target.value });
  // };
  // // handle image change
  // handleImageChange = (e) => {
  //   this.setState({ image: e.target.files[0] });
  // };

  // // handle price change
  // handlePriceChange = (e) => {
  //   this.setState({ price: e.target.value });
  // };

  // // handle description change
  // handleDescriptionChange = (e) => {
  //   this.setState({ description: e.target.value });
  // };

  // handle submit
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", this.state.image);
  //   formData.append("name", this.state.name);
  //   formData.append("description", this.state.description);
  //   formData.append("price", this.state.price);

  //   axios
  //     .patch(`https://skin-care-w7f1.onrender.com/api/product/${this.state.id}`, formData)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  handleUpdate = (id) => {
    // get the product you want to update
    const product = this.state.data.find((p) => p._id === id);

    // set the state with the product's data
    this.setState({
      id: product._id,
      treatmentName: product.treatmentName,
      image: product.image,
      description: product.description,
    });
  };

  // update product
  handleUpdate = (id) => {
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("treatmentName", this.state.treatmentName);
    formData.append("description", this.state.description);

    axios
      .put(`https://skin-care-w7f1.onrender.com/api/service/${id}`, formData)
      .then((response) => {
        console.log("service updated", response);
        // you can update the state with the updated data here
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }
    const { product } = this.props;
    const { isLoading } = this.state;
    return (
      <Sidebar>
        <div className="dashboard-content">
          {/* <div className="topbar flex flex-sb"> */}
          {/* <div className="search flex">
            <div className="searchicon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type="text" placeholder=" Search any collection" />
          </div>
          <div className="section flex ">
          <div className="section-left"> */}

          <div className="text">
            <h1>
              Discover <br />
              your own product
            </h1>
          </div>

          <div className="nfts">
            {/* <div className="heading ">
                <h2>Products</h2>
                <p>See all</p>
              </div> */}

            <section className="categories">
              <div className="category flex">
                {Array.isArray(data.response) ? (
                  data.response.map((service, index) => (
                    <div className="show" key={service.id || index}>
                      <div className="product-card">
                        <img
                          src={"https://skin-care-w7f1.onrender.com/" + service.image}
                          style={{
                            width: "100%",
                            height: "230px",
                            objectFit: "cover",
                            // objectPosition: "absolute",
                            // objectPosition:'-20px 20px',
                          }}
                          alt={service.name}
                        />
                        <div style={{ padding: "20px" }}>
                          <h3>{service.treatmentName}</h3>
                          <p>{service.description}</p>

                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => this.handleDelete(service._id)}
                            color="#537f71"
                          />

                          {/* <NavLink to='/updateproduct'> <FontAwesomeIcon icon={faEdit} color="#537f71" onClick={() => this.handleUpdate(product._id)}></FontAwesomeIcon></NavLink> */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Data is not an array</div>
                )}
              </div>
            </section>

            {/* <main>{this.props.children}</main> */}
          </div>
        </div>
      </Sidebar>
    );
  }
}
export default ServiceList;

// import React, { Component } from "react";
// import "../../Component/Service/service.css";
// import Sidebar from "../../Component/Sidebar/Sidebar";
// import img1 from "./serviceImageOne.jpg"

// const services_data = [
//   {
//     img: {img1},
//     img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
//     title: "Image 1",
//     name: "Service Nmae",
//     description:
//       "Acne facial treatment: Our acne facial treatment is an excellent choice for those who are dealing with an inflamed painful acne. It works on the outer and inner layers of the skin, starting by exfoliation the dead skin then going deep to the inner levels. During this treatment we extract the all the inflamed acne, black and whiteheads. Also we kill the bacteria living on the surface of the skin. This treatment includes: Steaming for the face Peeling Vacuum peeling High-frequency technique (special procedure for acne condition) Mask for acne Serum",
//   },
//   {
//     img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
//     title: "Image 2",
//     name: "Service Nmae",
//     description:
//       "Bloom Facial (HYDRATING FACIAL): Our hydrating facial treatment is designed to nourish your skin on a deeper level, removing dead skin cells, and stimulating the formation of newer, healthier cells. One the exfoliation of the top layer of old dead skin is complete, the healthy, hydrated, younger - looking skin underneath is revealed. This is the best treatment you could get at our clinic, it includes: Steaming for the face Exfoliation for the dead skin cells Dimond peeling (Microdermabrasion) Vacuum peeling (Abrasion) Extraction High frequency technique for (10 mins) Oxygenation Mask suitable for the skin condition Face lifting.",
//   },
//   {
//     img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
//     title: "Image 3",
//     name: "Service Nmae",
//     description:
//       "Classic facial: Also known as a European facial, the classic facial is the most basic type of facial. It includes: -steaming the face -exfoliation -extractions -mask suits the skin condition -serum & moisturizer You can get a classic facial as an addition to your skin care routine. You can also get it whenever you feel like pampering your self.",
//   },
//   {
//     img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
//     title: "Image 4",
//     name: "Service Nmae",
//     description:
//       "Deep cleansing facial: Deep pore cleansing facial is a facial designed for people with extremely oily skin, dry & dull skin. It works by opening the pores and giving the esthetician greater access to problems within. They will then exfoliate the client's face to remove all the dead skin cells, dirt and other debris there. Thiq treatment includes: Steaming the face Exfoliation for dead skin Dimond peeling (microdermabrasion) Extraction of whiter and black heads High frequency technique 2 masks suitable for the skin condition Serums and moisturizer Massaging.",
//   },
//   {
//     img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
//     title: "Image 5",
//     name: "Service Nmae",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Thiq treatment includes: Steaming the face Exfoliation for dead skin Dimond peeling (microdermabrasion) Extraction of whiter and black heads High frequency technique 2 masks suitable for the skin condition Serums and moisturizer Massaging. (Microdermabrasion) Vacuum peeling (Abrasion) Extraction High frequency technique for (10 mins) Oxygenation Mask suitable for the skin condition Face lifting.",
//   },
//   {
//     img: "https://blogscdn.thehut.net/app/uploads/sites/31/2020/07/Clinique-Moisture-Surge1_1595859472.jpg",
//     title: "Image 6",
//     name: "Service Nmae",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
//   },
//   {
//     img: "https://theskinhealthclinic.co.uk/wp-content/uploads/2019/07/theskinhealthcliniclogo2.png",
//     title: "Image 7",
//     name: "Service Nmae",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. ",
//   },
//   {
//     img: "https://theskinhealthclinic.co.uk/wp-content/uploads/2019/07/theskinhealthcliniclogo2.png",
//     title: "Image 8",
//     name: "Service Nmae",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. ",
//   },
//   {
//     img: "https://blogscdn.thehut.net/app/uploads/sites/31/2020/07/Clinique-Moisture-Surge1_1595859472.jpg",
//     title: "Image 9",
//     name: "Service Nmae",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
//   },
// ];

// class Services extends Component {
//   render() {
//     return (
//       <>
//         <Sidebar>
//           <div>
//             <div className="service-card-container">
//               {services_data.map((service, i) => (
//                 <div key={`service${i}`} className="service-card">
//                   <img src={service.img} title={service.title} alt="service" />
//                   <div className="service-descrip">
//                     <h3>{service.name}</h3>
//                     <p>{service.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Sidebar>
//       </>
//     );
//   }
// }
// export default Services;
