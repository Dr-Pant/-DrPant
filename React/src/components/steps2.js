import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Discover the Power of Our Courses</h2>
            <p className="thq-body-large">
              Unlock your potential with our expert-led courses, designed for
              career advancement and personal growth. Experience practical
              skills, real-world applications, and interactive learning in a
              supportive community. Transform your future today with our
              comprehensive and impactful educational programs.
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps2-text03 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps2-text04 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps2-text06 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps2-text07 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps2-text09 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps2-text10 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps2-text12 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps2-text13 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description:
    'Browse through our selection of courses on real estate, business mastery, and digital assets to find the perfect fit for your learning goals.',
  step1Title: 'Choose Your Course',
  step4Description:
    'Upon successful completion of the course, receive a certification to showcase your new skills and knowledge.',
  step3Description:
    'Access the course materials anytime, anywhere, and learn at a pace that suits your schedule and preferences.',
  step2Title: 'Enroll and Pay',
  step4Title: 'Get Certified',
  step2Description:
    'Enroll in your chosen course with a simple click and proceed to payment securely through our platform.',
  step3Title: 'Learn at Your Own Pace',
}

Steps2.propTypes = {
  step1Description: PropTypes.string,
  step1Title: PropTypes.string,
  step4Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
  step3Title: PropTypes.string,
}

export default Steps2
