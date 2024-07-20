import React from 'react'

import PropTypes from 'prop-types'

import './features20.css'

const Features20 = (props) => {
  return (
    <div
      id={props.layout349Id1}
      className="features20-layout349 thq-section-padding"
    >
      <section id="2" className="features20-max-width thq-section-max-width">
        <div className="features20-content">
          <div className="features20-section-title">
            <div className="features20-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
              <p className="thq-body-large">{props.description2}</p>
              <p className="thq-body-large">{props.description3}</p>
              <h2 className="thq-heading-2">{props.cost2}</h2>
            </div>
            <div className="features20-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScOHlBkDhhKBX9-5h-1TvvX9WPvp9JgHGhq6kvi9l0i-lq3aw/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer noopener"
                className="features20-button thq-button-filled"
              >
                <span className="thq-body-small">{props.feature1Action1}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="features20-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features20-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </section>
    </div>
  )
}

Features20.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzNTcyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  cost: '$200',
  feature1Description:
    'Our courses are taught by experts in the fields of real estate, business.',
  feature1Title: 'Expert-Led Courses',
  feature1Action1: 'Enroll Now',
  cost2: '$200',
  description4:
    'Our courses are taught by experts in the fields of real estate, business.',
  feature1Action2: 'Get Certified',
  description2:
    'Our courses are taught by experts in the fields of real estate, business.',
  layout349Id1: 'Crypto',
  feature1Slogan: 'Learn from industry professionals',
  feature1ImageAlt: 'Expert-Led Courses Image',
  description3:
    'Our courses are taught by experts in the fields of real estate, business.',
}

Features20.propTypes = {
  feature1ImageSrc: PropTypes.string,
  cost: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Action1: PropTypes.string,
  cost2: PropTypes.string,
  description4: PropTypes.string,
  feature1Action2: PropTypes.string,
  description2: PropTypes.string,
  layout349Id1: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  description3: PropTypes.string,
}

export default Features20
