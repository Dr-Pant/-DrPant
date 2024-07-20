import React from 'react'

import PropTypes from 'prop-types'

import './features191.css'

const Features191 = (props) => {
  return (
    <div
      id="BUs"
      className={`features191-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <section id="1" className="features191-max-width thq-section-max-width">
        <div className="features191-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features191-content">
          <div className="features191-section-title">
            <div className="features191-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
              <p className="thq-body-large">{props.description2}</p>
              <h2 className="features191-text3 thq-heading-2">{props.cost}</h2>
              <p className="thq-body-large">{props.description3}</p>
              <h2 className="features191-text5 thq-heading-2">{props.cost2}</h2>
            </div>
            <div className="features191-actions">
              <button className="features191-button thq-button-filled">
                <span className="thq-body-small">{props.feature1Action1}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Features191.defaultProps = {
  description2: '2 Classes related to Real Estate',
  feature1ImageAlt: 'Courses Offerings Image',
  feature1Action1: 'Enroll Now',
  feature1Slogan: 'Unlock Your Potential',
  feature1Action2: 'Get Certified',
  description3: 'Real Estate Setup Consultancy',
  cost2: 'INR 97,000',
  cost: 'INR 4997',
  feature1Title: 'Diverse Course Offerings',
  feature1Description: 'One Demo Class For Free',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1695654400723-d643e072c35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzNTcwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  description4:
    'Expert-led courses on real estate, business mastery, and digital assets',
}

Features191.propTypes = {
  description2: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Action1: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Action2: PropTypes.string,
  description3: PropTypes.string,
  cost2: PropTypes.string,
  cost: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  description4: PropTypes.string,
}

export default Features191
