import React from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero2-image"
      />
      <div className="hero2-container">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div>
              <h1 className="hero2-text welcome">{props.heading1}</h1>
              <p className="hero2-text1 thq-body-large">{props.content1}</p>
              <div className="hero2-actions">
                <div className="hero2-container1"></div>
                <div className="hero2-container2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  content1: 'Welcome! Explore, Discover, Connect, Explore',
  image1Src:
    'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500',
  heading1: 'Amit World Academy',
  action1: 'Main action',
  image1Alt: 'image',
  action2: 'Secondary action',
}

Hero2.propTypes = {
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero2
