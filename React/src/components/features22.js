import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div
      className={`features22-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="features22-container1 thq-grid-auto-300">
          <div className="features22-card thq-flex-column thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features22-image thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features22-text02 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features22-card1 thq-flex-column thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features22-image1 thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features22-text04 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features22-card2 thq-flex-column thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features22-image2 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature3Title}</h1>
            <span className="features22-text06 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features22-card3 thq-flex-column thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features22-image3 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature4Title}</h1>
            <span className="features22-text08 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features22-card4 thq-flex-column thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features22-image4 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature5Title}</h1>
            <span className="features22-text10 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features22-card5 thq-flex-column thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features22-image5 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature6Title}</h1>
            <span className="features22-text12 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
          <div className="features22-card6 thq-flex-column thq-card">
            <img
              alt={props.feature7ImageAlt}
              src={props.feature7ImageSrc}
              className="features22-image6 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature7Title}</h1>
            <span className="features22-text14 thq-body-small">
              {props.feature7Description}
            </span>
          </div>
          <div className="features22-card7 thq-flex-column thq-card">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features22-image7 thq-img-round thq-img-ratio-1-1"
            />
            <h1 className="thq-heading-2">{props.feature8Title}</h1>
            <span className="features22-text16 thq-body-small">
              {props.feature8Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature3Description:
    'Earn valuable certifications upon completion of courses to showcase your expertise.',
  feature6Title: 'Comprehensive Educational Programs',
  rootClassName: '',
  feature2ImageAlt: 'Image for Flexible Learning Options',
  feature7Description:
    'Discover and unleash your full potential with the guidance and resources provided.',
  feature1Title: 'Expert-Led Courses',
  heading1: 'Upcoming Courses',
  feature4Title: 'Supportive Community',
  feature5ImageAlt: 'Image for Different Pricing Plans',
  feature4Description:
    'Join a supportive community of learners and mentors to enhance your learning experience.',
  feature8Title: 'Community Support',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageAlt: 'Image for Comprehensive Educational Programs',
  feature8Description:
    'Engage with a community that is dedicated to helping each other succeed in their educational journey.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature7ImageAlt: 'Image for Unlock Your Potential',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Choose from a variety of learning formats to suit your schedule and preferences.',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1603988845046-10a65fa154f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Image for Expert-Led Courses',
  feature3ImageAlt: 'Image for Certifications',
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1615363049459-db5d76db4b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageAlt: 'Image for Supportive Community',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1514240260836-9a743d46148c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Certifications',
  feature5Description:
    'Select from various pricing plans to find the one that fits your budget and goals.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1680458841442-eeb9951c5fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Flexible Learning Options',
  feature8ImageAlt: 'Image for Community Support',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1695654402141-ba281c67cfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTIwMTYwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Title: 'Different Pricing Plans',
  feature7Title: 'Unlock Your Potential',
  feature1Description:
    'Learn from industry experts in real estate, business mastery, and digital assets.',
  feature6Description:
    'Access comprehensive educational programs that cover a wide range of topics and skills.',
}

Features22.propTypes = {
  feature3Description: PropTypes.string,
  feature6Title: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature7Description: PropTypes.string,
  feature1Title: PropTypes.string,
  heading1: PropTypes.string,
  feature4Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature8Title: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature8Description: PropTypes.string,
  content1: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  feature7Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature6Description: PropTypes.string,
}

export default Features22
