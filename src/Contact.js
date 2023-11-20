import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section section" tabIndex="-1">
      <div className="container">
        <div className="section-content row">

          {/* Text box */}
          <div className="contact-text col-lg-6">
            <div className="text-box-inline">
              <span className="subtitle">contact</span>
              <h2>
                Have You Any Project?
                <br />
                Please Drop a Message
              </h2>
              <p>
                Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
              </p>
            </div>

            {/* Contact info */}
            <ul className="contact-info">
              <li>
                <img src="assets/images/icons/address.png" alt="Address" />
                <div>
                  <strong>Address:</strong>
                  254 Kenya Ruaraka Allsops Naivas
                </div>
              </li>
              <li>
                <img src="assets/images/icons/phone.png" alt="Phone" />
                <div>
                  <strong>Phone:</strong>
                  <ul>
                    <li><a href="tel:02966202290" className="ltr-dir">(+254) 768830097</a></li>
                    <li><a href="tel:02966202291" className="ltr-dir">(+254) 713331448</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <img src="assets/images/icons/email.png" alt="Email" />
                <div>
                  <strong>Email:</strong>
                  <ul>
                    <li><a href="mailto:abrahamnetsec@gmail.com">abrahamnetsec@gmail.com</a></li>
                    <li><a href="mailto:nthege65@gmail.com">nthege65@gmail.com</a></li>
                  </ul>
                </div>
              </li>
            </ul>

            {/* Social links */}
            <ul className="social">
              <li>
                <a href="https://github.com/Nthenge" target="_blank" rel="noreferrer">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Abraham47c?t=VLibWXokv2bDeKPzB-VUvA&s=09" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/47made" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="col-lg-6">
            <form
              className="contact-form form-styled"
              action="contact_form.php"
              data-success-msg="Message sent successfully!"
              data-err-msg="Oops! something went wrong, please try again."
            >
              <div className="group">
                <label>Name</label>
                <div className="control has-prefix-icon">
                  <input type="text" name="name" placeholder="e.g. John Doe" minLength="3" required />
                  <i className="fa fa-user-circle prefix-icon" aria-hidden="true"></i>
                  <div className="errors-msgs">
                    <input className="required" type="hidden" value="Name is required" />
                    <input className="minLength" type="hidden" value="Name must be at least 3 characters" />
                  </div>
                </div>
              </div>
              <div className="group">
                <label>Email</label>
                <div className="control has-prefix-icon">
                  <input
                    className="ltr-dir"
                    type="email"
                    inputmode="email"
                    name="email"
                    placeholder="e.g. john.doe@gmail.com"
                    required
                  />
                  <i className="fa fa-envelope prefix-icon" aria-hidden="true"></i>
                  <div className="errors-msgs">
                    <input className="required" type="hidden" value="Email is required" />
                    <input className="invalid" type="hidden" value="Please enter a valid email address" />
                  </div>
                </div>
              </div>
              <div className="group phone-number">
                <label>Phone <span className="optional">(Optional)</span></label>
                <div className="control has-prefix-icon">
                  <input type="tel" inputmode="tel" name="phone" placeholder="Phone Number" />
                  <i className="fa fa-phone prefix-icon" aria-hidden="true"></i>
                  <div className="errors-msgs">
                    <input className="invalid" type="hidden" value="Please enter a valid Phone Number" />
                  </div>
                </div>
              </div>
              <div className="group">
                <label>Message</label>
                <div className="control has-prefix-icon">
                  <textarea name="message" placeholder="Write message..." required></textarea>
                  <i className="fa fa-comments prefix-icon" aria-hidden="true"></i>
                  <div className="errors-msgs">
                    <input className="required" type="hidden" value="Message is required" />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="control">
                  {/* <button className="submit-btn btn btn-dark" type="button" onClick={contactFormValidation}>Send</button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
