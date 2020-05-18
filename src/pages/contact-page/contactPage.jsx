import React from "react";
import "./contactPage.styles.css";

function ContactPage(props) {
  return (
    <div className="contact-container">
      <div className="sub-contact">
        <img
          className="contact-img"
          src="https://image.flaticon.com/icons/svg/1198/1198464.svg"
          alt=""
        />

        <a
          className="contact-content"
          href="https://www.google.com/maps?f=d&daddr=13.0183642,77.5078933&hl=en/"
        >
          <span className="sub-content">Visit us at: </span>221-B Baker Street
        </a>
      </div>

      <div className="sub-contact">
        <img
          className="contact-img"
          src="https://image.flaticon.com/icons/svg/732/732200.svg"
          alt=""
        />

        <a className="contact-content" href="mailto:cinemasy@contact.com">
          <span className="sub-content">or, Mail us at: </span>
          cinemasy@contact.com
        </a>
      </div>

      <div className="sub-contact">
        <img
          className="contact-img"
          src="https://image.flaticon.com/icons/svg/134/134951.svg"
          alt=""
        />

        <a className="contact-content" href="tel:9999948008">
          <span className="sub-content">or, Leave us a message on: </span>
          99999-48008
        </a>
      </div>

      <h3>We are happy to help</h3>
      <h3>
        Made with <span>❤️</span> by Subhendu
      </h3>
    </div>
  );
}
export default ContactPage;
