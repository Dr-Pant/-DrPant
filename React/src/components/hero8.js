import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
            <p className="hero8-text1 thq-body-large">{props.content1}</p>
            <div className="hero8-actions">
              <button className="hero8-button thq-button-filled">
                <span className="thq-body-small">{props.action1}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  action1: 'Get Started',
  heading1: 'Amit world academy',
  image1Alt: 'Illustration of people learning online',
  image1Src:
    'https://images.unsplash.com/photo-1695653420508-f2481c1d783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Explore Courses',
  content1: 'Unlock Your Potential with Expert-Led Courses',
}

Hero8.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero8
