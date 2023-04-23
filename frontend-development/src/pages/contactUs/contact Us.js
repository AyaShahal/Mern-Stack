import { Component } from "react";
import "./contact.css";
import Footer from "../../Component/footer-component/footer";
import {faPhone,faMap,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class contact extends Component {
  render() {
    return (
      <div className="contact-page">
     <div className="contact-page">
  {/* <section id="contact">
    <h2>Get in Touch</h2>
    <div id="contact-info">
      <div class="contact-item">
        <div class="icon-circle">
          <FontAwesomeIcon icon={faMap} size={50} />
        </div>
        <h3>ADDRESS</h3>
        <p>Lebanon,Tripoli</p>
      </div>
      <div class="contact-item">
        <div class="icon-circle">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h3>PHONE</h3>
        <p>(961) 71 985576</p>
      </div>
      <div class="contact-item">
        <div class="icon-circle">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h3>EMAIL</h3>
        <p>BloomSkinCare@gmail.com</p>
      </div>
    </div>
  </section> */}
</div>

        <section className="contact" style={{marginTop:"5px"}}>
          <div className="contact-heading">
            {/* <h2>Contact Us</h2> */}
          </div>
          <div className="contact-container" style={{ paddingTop:"100px",paddingBottom:"120px"}}>
            <div className="container1">
              <form
                id="form1"
                action="https://formspree.io/f/mgeboqyg"
                method="POST"
              >
                <div className="ask">
                  <h2>Ask us anything</h2>
                  <p>your email address will not be published.Required field</p>
                </div>
                <div className="contact-block">
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="text-area-div">
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    id="comment"
                    name="Comment"
                    placeholder="Comment"
                    rows={10}
                    cols={20}
                  ></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848044.564053901!2d35.286993299449186!3d33.87228947934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17028422aaad%3A0xcc7d34096c00f970!2sLebanon!5e0!3m2!1sen!2slb!4v1675327073499!5m2!1sen!2slb"
                width="750px"
                height="510px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                alt="map"
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default contact;
