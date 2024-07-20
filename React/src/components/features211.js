import React from 'react'

import PropTypes from 'prop-types'

import './features211.css'

const Features211 = (props) => {
  return (
    <div
      className={`features211-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features211-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="features211-container thq-flex-column thq-card">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features211-image thq-img-round thq-img-ratio-1-1"
          />
          <h2 className="thq-heading-2">{props.feature1Title}</h2>
          <span className="features211-text01 thq-body-small">
            {props.feature1Description}
          </span>
          <a
            href="#re"
            className="features211-button thq-button-animated thq-button-outline"
          >
            <span className="features211-text02 thq-body-small">
              {props.buttontext}
            </span>
          </a>
        </div>
        <div className="features211-container1 thq-flex-column thq-card">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features211-image1 thq-img-round thq-img-ratio-1-1"
          />
          <h2 className="thq-heading-2">{props.feature2Title}</h2>
          <span className="features211-text04 thq-body-small">
            {props.feature2Description}
          </span>
          <a
            href="#2"
            className="features211-button1 thq-button-animated thq-button-outline"
          >
            <span className="features211-text05 thq-body-small">
              {props.button1text}
            </span>
          </a>
        </div>
        <div className="features211-container2 thq-flex-column thq-card">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features211-image2 thq-img-round thq-img-ratio-1-1"
          />
          <h2 className="thq-heading-2">{props.feature3Title}</h2>
          <span className="features211-text07 thq-body-small">
            {props.feature3Description}
          </span>
          <a
            href="#BUs"
            className="features211-button2 thq-button-animated thq-button-outline"
          >
            <span className="features211-text08 thq-body-small">
              {props.button2text}
            </span>
          </a>
        </div>
        <div className="features211-container3 thq-flex-column thq-card">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="features211-image3 thq-img-round thq-img-ratio-1-1"
          />
          <h2 className="thq-heading-2">{props.feature4Title}</h2>
          <span className="features211-text10 thq-body-small">
            {props.feature4Description}
          </span>
          <a
            href="#B&amp;E"
            className="features211-button3 thq-button-animated thq-button-outline"
          >
            <span className="features211-text11 thq-body-small">
              {props.button3text}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

Features211.defaultProps = {
  feature4Title: 'Business & Entrepreneur',
  feature1Title: 'Real Estate',
  buttonType3: 'button3',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1519995451813-39e29e054914?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxjcnlwdG98ZW58MHx8fHwxNzIxMjAxMzA2fDA&ixlib=rb-4.0.3&w=1400',
  buttonType1: 'button1',
  feature2Description:
    'Choose from a variety of learning formats to suit your schedule and preferences.',
  feature3Description:
    'Earn valuable certifications upon completion of courses to enhance your credentials.',
  feature1Description:
    'Learn from industry experts in real estate, business mastery, and digital assets.',
  rootClassName: '',
  buttonType2: 'button2',
  feature3Title: 'Business',
  buttontext: 'Learn Now',
  feature2ImageAlt: 'Image of flexible learning options',
  feature2Title: 'Cryptocurrency',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQzfHxidXNpbmVzc3xlbnwwfHx8fDE3MjEyMDM1Mzd8MA&ixlib=rb-4.0.3&w=1400',
  feature4Description:
    'Join a supportive community of learners to network, collaborate, and grow together.',
  button1text: 'Learn Now',
  feature3ImageAlt: 'Image of certifications',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxidXNpbmVzc3xlbnwwfHx8fDE3MjEyMDM1Mzd8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Image of expert-led courses',
  feature4ImageAlt: 'Image of supportive community',
  button3text: 'Learn Now',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHJlYWx8ZW58MHx8fHwxNzIxMjAzNDA0fDA&ixlib=rb-4.0.3&w=1400',
  buttontype: 'button',
  button2text: 'Learn Now',
}

Features211.propTypes = {
  feature4Title: PropTypes.string,
  feature1Title: PropTypes.string,
  buttonType3: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  buttonType1: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  buttonType2: PropTypes.string,
  feature3Title: PropTypes.string,
  buttontext: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  button1text: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  button3text: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  buttontype: PropTypes.string,
  button2text: PropTypes.string,
}

export default Features211
