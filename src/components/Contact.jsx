import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Contact</h2>
        <p>For more information, please feel free to contact me!</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>Apalit, Pampanga</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+1234567890</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>catibogtrishamae2@gmail.com.com</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
          <div className="col-lg-7">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message-field"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
