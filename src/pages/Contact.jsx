import React from "react";

const Contact = () => {
  return (
    <div className="contact-page py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have a question? Feel free to contact us.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm p-4">

              <h3 className="fw-bold mb-4">
                Send Us a Message
              </h3>

              <form>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-dark px-4"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;