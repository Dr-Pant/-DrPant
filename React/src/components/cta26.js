import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container1">
              <div className="cta26-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta26-actions">
                <Link to="/courses" className="cta26-navlink thq-button-filled">
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

CTA26.defaultProps = {
  content1:
    'Explore our courses on real estate, business mastery, and digital assets to take your knowledge to the next level.',
  heading1: 'Ready to level up your skills?',
  action1: 'Browse Courses',
}

CTA26.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA26
