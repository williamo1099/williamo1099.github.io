import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

// STYLING
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_de2g47n",
        "template_dbnn33z",
        form.current,
        "5gKATSAbFZE2dR_8m"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fade>
      <div className="container-fluid p-3">
        <div className="text-center">
          <h1>Get in Touch</h1>
          <h3>Don't be afraid to contact me!</h3>
        </div>

        {/* FORM */}
        <div className="container border text-left w-50 mt-4 p-3">
          <form ref={form} onSubmit={handleSubmit}>
            {/* NAME */}
            <div class="form-group">
              <label for="form-name">
                Name <span className="text-danger">*</span>
              </label>
              <input
                id="form-name"
                name="name"
                class="form-control"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <br />

            {/* EMAIL */}
            <div class="form-group">
              <label for="form-email">
                E-mail <span className="text-danger">*</span>
              </label>
              <input
                id="form-email"
                name="email"
                class="form-control"
                type="email"
                placeholder="Enter your e-mail address"
                required
              />
            </div>
            <br />

            {/* MESSAGE */}
            <div class="form-group">
              <label for="form-message">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                id="form-message"
                name="message"
                class="form-control"
                rows="4"
                type="text"
                placeholder="Enter your message"
                required
              />
            </div>
            <br />

            {/*  */}
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
