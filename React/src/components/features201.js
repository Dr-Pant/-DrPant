import React from 'react'

import PropTypes from 'prop-types'

import './features201.css'

const Features201 = (props) => {
  return (
    <div
      id="Crypto"
      className={`features201-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <section id="2" className="features201-max-width thq-section-max-width">
        <div className="features201-content">
          <div className="features201-section-title">
            <div className="features201-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
              <p className="thq-body-large">{props.description2}</p>
              <p className="thq-body-large">{props.description3}</p>
              <h2 className="thq-heading-2">{props.cost2}</h2>
            </div>
            <div className="features201-actions">
              <button className="features201-button thq-button-filled">
                <span className="thq-body-small">{props.feature1Action1}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="features201-image-container">
          <img
            id="B&amp;E"
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features201-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </section>
    </div>
  )
}

Features201.defaultProps = {
  cost: '$200',
  rootClassName: '',
  feature1Slogan: 'Learn from industry professionals',
  feature1Title: 'Expert-Led Courses',
  feature1Description:
    'Our courses are taught by experts in the fields of real estate, business.',
  feature1Action1: 'Enroll Now',
  cost2: '$200',
  feature1Action2: 'Get Certified',
  description2:
    'Our courses are taught by experts in the fields of real estate, business.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzNTcyMXw&ixlib=rb-4.0.3&q=80&w=1400',
  description4:
    'Our courses are taught by experts in the fields of real estate, business.',
  description3:
    'Our courses are taught by experts in the fields of real estate, business.',
  feature1ImageAlt: 'Expert-Led Courses Image',
}

Features201.propTypes = {
  cost: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Action1: PropTypes.string,
  cost2: PropTypes.string,
  feature1Action2: PropTypes.string,
  description2: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  description4: PropTypes.string,
  description3: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features201
