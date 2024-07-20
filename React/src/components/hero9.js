import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <Link to="/courses" className="hero9-button thq-button-outline">
              <span className="hero9-text2 thq-body-small">
                {props.action2}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  action2: 'Explore Courses',
  image1Alt: 'Online Courses',
  action1: 'Get Started',
  heading1: 'Unlock Your Potential with Expert-Led Courses',
  image1Src:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0NDU4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Take your skills to the next level with our comprehensive courses on real estate, business mastery, digital assets and more.',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero9
