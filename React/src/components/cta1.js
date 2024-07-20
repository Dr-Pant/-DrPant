import React from 'react'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-max-width thq-section-max-width">
        <div className="cta1-content">
          <h2 className="cta1-heading1 thq-heading-2">{props.heading1}</h2>
          <p className="cta1-content1 thq-body-large">{props.content1}</p>
          <div className="cta1-actions"></div>
        </div>
      </div>
    </div>
  )
}

CTA1.defaultProps = {
  heading1: 'Top Courses At Amit World Academy',
  content1:
    'Choose from a variety of expert-led courses and take the next step towards mastering real estate, business, digital assets, and more.',
  action2: 'Get Certified',
  action1: 'Explore Courses',
}

CTA1.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA1
