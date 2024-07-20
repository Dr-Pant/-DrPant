import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div
      className={`contact10-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text1 thq-heading-3">{props.location1}</h3>
          </div>
        </div>
        <div className="contact10-container2 thq-flex-row">
          <a
            href="https://maps.app.goo.gl/mJ8fa26ZZ2EXNbyN9"
            target="_blank"
            rel="noreferrer noopener"
            className="contact10-link button"
          >
            {props.button1}
          </a>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Locations',
  location1: 'Sector 45, Noida, Gautam Buddha Nagar, UP, India',
  rootClassName: '',
  location1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location1ImageSrc: '/map-1400w.png',
  button: 'Button',
  location1ImageAlt: 'image1Alt',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2: 'Cluj - Napoca',
  button1: 'Go to the map',
  location2ImageAlt: 'image2Alt',
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  location1: PropTypes.string,
  rootClassName: PropTypes.string,
  location1Description: PropTypes.string,
  location2Description: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  button: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.string,
  location2: PropTypes.string,
  button1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
