import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features5.css'

const Features5 = (props) => {
  return (
    <div className="features5-layout223 thq-section-padding">
      <div className="features5-max-width thq-flex-row thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.featureImageAlt}
            src={props.featureImageSrc}
            className="thq-img-ratio-4-3"
          />
        </div>
        <div className="thq-flex-column">
          <div className="features5-list thq-flex-column">
            <div className="thq-flex-row features5-list-item">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-content1 thq-flex-column">
                <h3 className="thq-heading-3 features5-title2">
                  {props.feature2Description1}
                </h3>
                <span className="thq-body-small features5-description2">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="thq-flex-row features5-list-item1">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-content2 thq-flex-column">
                <h3 className="thq-heading-3 features5-title3">
                  {props.feature3Title}
                </h3>
                <span className="thq-body-small features5-description3">
                  {props.feature3Description}
                </span>
              </div>
            </div>
            <div className="thq-flex-row">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-content3 thq-flex-column">
                <h3 className="thq-heading-3 features5-title1">
                  {props.feature1Title}
                </h3>
                <span className="thq-body-small features5-description1">
                  {props.feature1Description}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-flex-row features5-actions">
            <button className="features5-button thq-button-filled">
              <span className="thq-body-small">{props.mainAction}</span>
            </button>
            <Link
              to="/courses"
              className="features5-button1 thq-button-outline"
            >
              <span className="thq-body-small">{props.secondaryAction}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Features5.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1611798821136-26bfb61b734f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI1NjM0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Digital Assets Course Image',
  feature1Description: 'Gain Knowledge from Industry Experts',
  secondaryAction: 'Explore More',
  mainAction: 'Enroll Now',
  feature2Description: 'Learn at Your Own Pace',
  feature2ImageAlt: 'Business Mastery Course Image',
  feature1Title: 'Expert-Led Courses',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1592839656073-833413ae8874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI1NjM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: 'Enhance Skills in Digital Investments',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI1NjM0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description1: 'Flexible Learning Schedule',
  featureImageSrc:
    'https://images.unsplash.com/photo-1512799545738-0625ef92a288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI1NjM0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  featureImageAlt: 'Business Mastery Course Image',
  feature1ImageAlt: 'Real Estate Course Image',
  feature3Title: 'Digital Assets Mastery',
}

Features5.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Description1: PropTypes.string,
  featureImageSrc: PropTypes.string,
  featureImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features5
