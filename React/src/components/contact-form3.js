import React from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imagesvg}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <div className="contact-form3-content1">
              <h3 className="thq-heading-2">{props.heading1}</h3>
              <span className="thq-body-large">{props.content1}</span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form3-input">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form3-checkbox">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text5 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  imagesvg:
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzY4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Don’t Hesitate to contact us for any kind of information.',
  imageAlt: 'Image1',
  content2: 'Get in touch with us',
  heading1: 'Contact us',
  action: 'Submit',
}

ContactForm3.propTypes = {
  imagesvg: PropTypes.string,
  content1: PropTypes.string,
  imageAlt: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm3
