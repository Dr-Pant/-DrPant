import React from 'react'

import PropTypes from 'prop-types'

import './features19.css'

const Features19 = (props) => {
  return (
    <div
      id="re"
      className={`features19-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <section id="1" className="features19-max-width thq-section-max-width">
        <div className="features19-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features19-content">
          <div className="features19-section-title">
            <div className="features19-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
              <p className="thq-body-large">{props.description2}</p>
              <h2 className="features19-text3 thq-heading-2">{props.cost}</h2>
              <p className="thq-body-large">{props.description3}</p>
              <h2 className="features19-text5 thq-heading-2">{props.cost2}</h2>
            </div>
            <div className="features19-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScOHlBkDhhKBX9-5h-1TvvX9WPvp9JgHGhq6kvi9l0i-lq3aw/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer noopener"
                className="features19-button thq-button-filled"
              >
                <span className="thq-body-small">{props.feature1Action1}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Features19.defaultProps = {
  description2: '2 Classes related to Real Estate',
  cost: 'INR 4997',
  feature1Action1: 'Enroll Now',
  cost2: 'INR 97,000',
  rootClassName: '',
  description4:
    'Expert-led courses on real estate, business mastery, and digital assets',
  feature1Action2: 'Get Certified',
  feature1ImageAlt: 'Courses Offerings Image',
  description3: 'Real Estate Setup Consultancy',
  feature1Title: 'Diverse Course Offerings',
  feature1Slogan: 'Unlock Your Potential',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1695654400723-d643e072c35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzNTcwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: 'One Demo Class For Free',
}

Features19.propTypes = {
  description2: PropTypes.string,
  cost: PropTypes.string,
  feature1Action1: PropTypes.string,
  cost2: PropTypes.string,
  rootClassName: PropTypes.string,
  description4: PropTypes.string,
  feature1Action2: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  description3: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features19
