import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div id="FAQs" className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <Link to="/contact" className="faq1-button thq-button-outline">
              <span className="thq-body-small">{props.action1}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Question: 'Are there different pricing plans available?',
  faq5Answer:
    'You can contact us through our website or email us at support@amitworldacademy.com.',
  faq4Answer:
    'Yes, we offer a variety of pricing plans to suit your budget and learning needs.',
  heading1: 'FAQs',
  faq5Question: 'How can I get in touch for inquiries?',
  action1: 'Contact Us',
  heading2: 'Still have a question?',
  content2: 'You can contact with us.',
  faq3Question: 'How can I get certified after completing a course?',
  content1:
    'Our platform offers courses on real estate, business mastery, and digital assets. You can explore a wide range of expert-led courses in these areas.',
  faq2Question: 'Can I learn at my own pace?',
  faq1Answer:
    'Our platform offers courses on real estate, business mastery, digital assets and more.',
  faq1Question: 'What types of courses are offered on the platform?',
  faq3Answer:
    'Upon completing a course, you will receive a certificate of completion to showcase your new skills.',
  faq2Answer:
    'Yes, you can learn at your own pace and revisit course materials as needed.',
}

FAQ1.propTypes = {
  faq4Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question: PropTypes.string,
  action1: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
}

export default FAQ1
