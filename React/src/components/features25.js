import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Description:
    'Explore a wide range of real estate courses designed to help you succeed in the industry.',
  feature2ImgAlt: 'Business Mastery Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1695654396127-8836bc522aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Digital Assets Training',
  feature2Title: 'Advanced Business Strategies',
  feature1Title: 'Real Estate Courses',
  feature3Description:
    'Learn about digital assets and how to leverage them for financial growth and security.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1531182754451-7a788306118d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Real Estate Courses Image',
  feature2Description:
    "Master the essential business skills and strategies needed to excel in today's competitive market.",
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Digital Assets Training Image',
}

Features25.propTypes = {
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features25
