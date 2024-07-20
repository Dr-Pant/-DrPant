import React from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content thq-flex-row">
          <div className="contact7-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact7-content2 thq-flex-row">
          <div className="contact7-container1">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3 className="contact7-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
          </div>
          <div className="contact7-container2">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text4 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  content1:
    'For general inquiries, collaborations, or any questions you may have.',
  heading1: 'Get in Touch',
  location1ImgAlt: 'Email Icon',
  location2: 'Social Media',
  location2Description:
    'Connect with us on our social media channels for updates, news, and more.',
  location2ImgAlt: 'Social Media Icons',
  location1: 'Email',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1517232115160-ff93364542dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description:
    "Send us an email at info@amitworldacademy.com and we'll get back to you as soon as possible.",
  location1ImgSrc:
    'https://images.unsplash.com/photo-1422246358533-95dcd3d48961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzY4OHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact7.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location2: PropTypes.string,
  location2Description: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location1: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.string,
  location1ImgSrc: PropTypes.string,
}

export default Contact7
