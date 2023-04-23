import React, { Component } from "react";
import "./service.css";
// import img1 from "./serviceImageOne.jpg"

const services_data = [
  {
    // img: {img1},
    img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
    title: "Image 1",
    name: "Acne facial treatment",
    description:
      "Our acne facial treatment is an excellent choice for those who are dealing with an inflamed painful acne. It works on the outer and inner layers of the skin, starting by exfoliation the dead skin then going deep to the inner levels. During this treatment we extract the all the inflamed acne, black and whiteheads. Also we kill the bacteria living on the surface of the skin. This treatment includes: Steaming for the face Peeling Vacuum peeling High-frequency technique (special procedure for acne condition) Mask for acne Serum",
  },
  {
    img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
    title: "Image 2",
    name: "Bloom Facial",
    description:
      "Bloom Facial (HYDRATING FACIAL): Our hydrating facial treatment is designed to nourish your skin on a deeper level, removing dead skin cells, and stimulating the formation of newer, healthier cells. One the exfoliation of the top layer of old dead skin is complete, the healthy, hydrated, younger - looking skin underneath is revealed. This is the best treatment you could get at our clinic, it includes: Steaming for the face Exfoliation for the dead skin cells Dimond peeling (Microdermabrasion) Vacuum peeling (Abrasion) Extraction High frequency technique for (10 mins) Oxygenation Mask suitable for the skin condition Face lifting.",
  },
  {
    img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
    title: "Image 3",
    name: "Classic facial",
    description:
      "Also known as a European facial, the classic facial is the most basic type of facial. It includes: -steaming the face -exfoliation -extractions -mask suits the skin condition -serum & moisturizer You can get a classic facial as an addition to your skin care routine. You can also get it whenever you feel like pampering your self.",
  },
  {
    img: "https://skinglowlaser.ca/wp-content/uploads/2022/05/Dermaplaning-Glow-Getter-Facial-1000x800-1-500x400.jpg",
    title: "Image 4",
    name: "Deep cleansing facial",
    description:
      "Deep pore cleansing facial is a facial designed for people with extremely oily skin, dry & dull skin. It works by opening the pores and giving the esthetician greater access to problems within. They will then exfoliate the client's face to remove all the dead skin cells, dirt and other debris there. Thiq treatment includes: Steaming the face Exfoliation for dead skin Dimond peeling (microdermabrasion) Extraction of whiter and black heads High frequency technique 2 masks suitable for the skin condition Serums and moisturizer Massaging.",
  },
  // {
  //   img: "https://blogscdn.thehut.net/app/uploads/sites/31/2020/07/Clinique-Moisture-Surge1_1595859472.jpg",
  //   title: "Image 5",
  //   name: "Service Nmae",
  //   description:
  //     "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  // },
  // {
  //   img: "https://blogscdn.thehut.net/app/uploads/sites/31/2020/07/Clinique-Moisture-Surge1_1595859472.jpg",
  //   title: "Image 6",
  //   name: "Service Nmae",
  //   description:
  //     "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  // },
  // {
  //   img: "https://theskinhealthclinic.co.uk/wp-content/uploads/2019/07/theskinhealthcliniclogo2.png",
  //   title: "Image 7",
  //   name: "Service Nmae",
  //   description:
  //     "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. ",
  // },
  // {
  //   img: "https://theskinhealthclinic.co.uk/wp-content/uploads/2019/07/theskinhealthcliniclogo2.png",
  //   title: "Image 8",
  //   name: "Service Nmae",
  //   description:
  //     "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. ",
  // },
  // {
  //   img: "https://blogscdn.thehut.net/app/uploads/sites/31/2020/07/Clinique-Moisture-Surge1_1595859472.jpg",
  //   title: "Image 9",
  //   name: "Service Nmae",
  //   description:
  //     "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  // },
];

class Services extends Component {
  render() {
    return (
      <>
        <div>
          <div class="productimage">
            {/* <img src="https://i.pinimg.com/originals/4b/60/e3/4b60e39c60da383d14e64cbc7a602407.jpg"/> */}
            <div class="producttext">
              <p>
                "Formulas drawn from earth’s natural phenomena. Ingredients that
                have been used for centuries.."
              </p>
            </div>
          </div>
          <div className="service-card-container">
            {services_data.map((service, i) => (
              <div key={`service${i}`} className="service-card">
                <img src={service.img} title={service.title} alt="service" />
                <div className="service-descrip">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Services;

// import React, { Component, useEffect, useState } from "react";
// import Axios from "axios";
// const app = () => {
//   const [data, setData] = useState();

//   const getData = async (data) => {
//     const response = await Axios.get("http://localhost:5000/getData");
//     setData(response.data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return <div>{data}</div>;
// };

// export default app;
