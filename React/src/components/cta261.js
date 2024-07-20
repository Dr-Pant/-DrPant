import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta261.css'

const CTA261 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta261-accent2-bg">
          <div className="cta261-accent1-bg">
            <div className="cta261-container1">
              <div className="cta261-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta261-actions">
                <Link
                  to="/courses"
                  className="cta261-navlink thq-button-filled"
                >
                  {props.action1}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA261.defaultProps = {
  heading1: 'Unlock Your Potential Today',
  action1: 'Explore Courses',
  content1:
    'Choose from our wide range of expert-led courses and start your journey towards success.',
}

CTA261.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA261
