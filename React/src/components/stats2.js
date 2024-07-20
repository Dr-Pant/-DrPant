import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container1 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container2 thq-flex-column">
          <span className="thq-body-small">{props.content1}</span>
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <div className="stats2-container3 thq-grid-2">
            <div className="stats2-container4">
              <h2 className="thq-heading-2">{props.stat1}</h2>
              <span className="thq-body-small">{props.stat1Description}</span>
            </div>
            <div className="stats2-container5">
              <h2 className="thq-heading-2">{props.stat2}</h2>
              <span className="thq-body-small">{props.stat2Description}</span>
            </div>
          </div>
          <div className="stats2-container6 thq-grid-2">
            <div className="stats2-container7">
              <h2 className="thq-heading-2">{props.stat3}</h2>
              <span className="thq-body-small">{props.stat3Description}</span>
            </div>
            <div className="stats2-container8">
              <h2 className="thq-heading-2">{props.stat4}</h2>
              <span className="thq-body-small">{props.stat4Description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat2Description: 'Expert-led courses',
  stat1: '10+ courses available',
  stat4Description: 'Join our community of happy and successful learners.',
  stat3: 'Certification upon course completion',
  stat1Description: 'Dive into a wide range of courses.',
  image1Src:
    'https://images.unsplash.com/photo-1606926693996-d1dfbed4e8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Explore Our Stats',
  content2: 'Learn from industry experts and enhance your skills.',
  stat2: 'Expert Instructors',
  image1Alt: 'Courses Available',
  content1:
    'Choose from a variety of topics including real estate, business mastery, and digital assets.',
  stat3Description: 'Get certified in your chosen field.',
  stat4: 'Satisfied learners worldwide',
}

Stats2.propTypes = {
  stat2Description: PropTypes.string,
  stat1: PropTypes.string,
  stat4Description: PropTypes.string,
  stat3: PropTypes.string,
  stat1Description: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  stat2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  stat3Description: PropTypes.string,
  stat4: PropTypes.string,
}

export default Stats2
