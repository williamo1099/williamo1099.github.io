import { React, useRef } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

// COMPONENTS
import PageHeader from "components/PageHeader";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs.
    const serviceId = "service_de2g47n";
    const templateId = "template_dbnn33z";
    const publicKey = "5gKATSAbFZE2dR_8m";
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        alert(
          "Message sent successfully! I'll get back to you as soon as possible."
        );
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Fade>
      <div className="container-fluid one-page">
        <PageHeader
          title="Get In Touch"
          subtitle="Don't be afraid to contact me!"
        />

        {/* FORM */}
        <Bounce delay={200} duration={750}>
          <div className="container w-75 mt-4 p-3">
            <form ref={form} onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="form-group">
                <label>
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  id="form-name"
                  name="name"
                  className="form-control border-secondary rounded-0 bg-transparent"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <br />

              {/* EMAIL */}
              <div className="form-group">
                <label>
                  E-mail <span className="text-danger">*</span>
                </label>
                <input
                  id="form-email"
                  name="email"
                  className="form-control border-secondary rounded-0 bg-transparent"
                  type="email"
                  placeholder="Enter your e-mail address"
                  required
                />
              </div>
              <br />

              {/* MESSAGE */}
              <div className="form-group">
                <label>
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  className="form-control border-secondary rounded-0 bg-transparent"
                  rows="4"
                  type="text"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <br />

              {/*  */}
              <button type="submit" className="btn btn-secondary">
                Send
              </button>
            </form>
          </div>
        </Bounce>
      </div>
    </Fade>
  );
}

export default Contact;
