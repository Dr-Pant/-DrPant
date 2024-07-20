import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1583429741726-10d5a01b8efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2: 'I saw immediate results after implementing what I learned.',
  author2Src:
    'https://images.unsplash.com/photo-1584956861679-e2a0a04b8393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4: 'My business improve a lot after implementing what I learned.',
  author4Position: 'Entrepreneur',
  heading1: 'Testimonials',
  content1:
    'I took the real estate course and it completely transformed my approach to investing. The content was top-notch and the instructors were very knowledgeable.',
  author1Position: 'Real Estate Investor',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'image',
  author1Name: 'John Doe',
  author3Name: 'David Johnson',
  review3:
    'I now feel confident navigating the digital market thanks to this course.',
  author2Position: 'Entrepreneur',
  author3Alt: 'Image of David Johnson',
  author2Name: 'Jane Smith',
  author4Src:
    'https://images.unsplash.com/photo-1578489758854-f134a358f08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1: 'Highly recommended for anyone serious about real estate!',
  author3Position: 'Digital Marketer',
  author4Name: 'Raj Joshi',
  author3Src:
    'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MTU2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
}

Testimonial17.propTypes = {
  author1Src: PropTypes.string,
  review2: PropTypes.string,
  author2Src: PropTypes.string,
  review4: PropTypes.string,
  author4Position: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Name: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author4Src: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  author4Name: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Testimonial17
