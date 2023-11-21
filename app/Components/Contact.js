import React from "react";
import "../Components/Contact.css";
function Contact() {
  return (
    <div className="contact-main-div">
      <div className="contact-div">
        <div className="contact-img-div">
          <img src="images/mock-contact.png" alt="" className="contact-img" />
        </div>
        <div className="contact-details">
          <div className="contact-heading">
            <p>SEND MESSAGE</p>
            <h2>
              DROP <span> US A LINE</span>
            </h2>
          </div>
          <div className="contact-inputs">
            <form action="" className="contact-form">
              <div className="input-first">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company" />
              </div>
              <div className="second-input">
                <input type="email" placeholder="Email Address" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  maxLength={10}
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Requirements"
                className="contact-requirement"
              />
              <div className="contact-btn-div">
                <button className="contact-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
