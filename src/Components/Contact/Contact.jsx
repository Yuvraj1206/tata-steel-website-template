import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="title-contact">
        <h1>CONTACT</h1>
        <h4>Get In Touch</h4>
      </div>
      <div className="contact">
        <div className="contact-left">
          <h3>Send us a message</h3>
          <p>
            Feel free to reach out through the contact form or find our contact
            information below. Your feeedback question and suggestions are
            important to us as we strive to provide the exceptional services.
          </p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>{" "}
              example@email.com
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>{" "}
              xxxx-xxxx-xx
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>{" "}
              Your address here
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <form>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
            />
            <label>Phone No.</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile no. here"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message here"
              required
            />
            <button type="submit" className="btn-form">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
