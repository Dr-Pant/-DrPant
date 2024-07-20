import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar81.css'

const Navbar81 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar81-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar81-navbar-interactive">
        <Link to="/" className="navbar81-navlink">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar81-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar81-desktop-menu">
          <nav className="navbar81-links">
            <Link to="/" className="navbar81-link2 thq-body-small thq-link">
              {props.link1}
            </Link>
            <Link
              to="/courses"
              className="navbar81-link3 thq-body-small thq-link"
            >
              {props.link2}
            </Link>
            <Link
              to="/about"
              className="navbar81-link4 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar81-link5-dropdown-trigger"
            >
              <Link
                to="/contact"
                className="navbar81-link5 thq-body-small thq-link"
              >
                {props.link4}
              </Link>
              <div className="navbar81-icon-container">
                {link5DropdownVisible && (
                  <div className="navbar81-container1">
                    <svg viewBox="0 0 1024 1024" className="navbar81-icon">
                      <path d="M298 426h428l-214 214z" className=""></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar81-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar81-icon02">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar81-buttons">
            <Link
              to="/courses"
              className="navbar81-action1 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Get Started</span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar81-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar81-icon04">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar81-mobile-menu">
          <div className="navbar81-nav">
            <div className="navbar81-top">
              <Link to="/" className="navbar81-navlink1">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar81-logo"
                />
              </Link>
              <div data-thq="thq-close-menu" className="navbar81-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar81-icon06">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar81-links1">
              <Link to="/" className="navbar81-link21 thq-body-small thq-link">
                {props.link1}
              </Link>
              <Link
                to="/courses"
                className="navbar81-link31 thq-body-small thq-link"
              >
                {props.link2}
              </Link>
              <Link
                to="/about"
                className="navbar81-link41 thq-body-small thq-link"
              >
                {props.link3}
              </Link>
              <div className="navbar81-link5-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar81-trigger"
                >
                  <Link
                    to="/contact"
                    className="navbar81-link51 thq-body-small thq-link"
                  >
                    {props.link4}
                  </Link>
                  <div className="navbar81-icon-container1">
                    {link5AccordionOpen && (
                      <div className="navbar81-container3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar81-icon08"
                        >
                          <path d="M298 426h428l-214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar81-container4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar81-icon10"
                        >
                          <path d="M426 726v-428l214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar81-container5">
                    <div className="navbar81-menu-item">
                      <img
                        alt={props.page1ImageAlt}
                        src={props.page1ImageSrc}
                        className="navbar81-page1-image"
                      />
                      <div className="navbar81-content">
                        <span className="navbar81-page1 thq-body-large">
                          {props.page1}
                        </span>
                        <span className="thq-body-small">
                          {props.page1Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar81-menu-item1">
                      <img
                        alt={props.page2ImageAlt}
                        src={props.page2ImageSrc}
                        className="navbar81-page2-image"
                      />
                      <div className="navbar81-content1">
                        <span className="navbar81-page2 thq-body-large">
                          {props.page2}
                        </span>
                        <span className="thq-body-small">
                          {props.page2Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar81-menu-item2">
                      <img
                        alt={props.page3ImageAlt}
                        src={props.page3ImageSrc}
                        className="navbar81-page3-image"
                      />
                      <div className="navbar81-content2">
                        <span className="navbar81-page3 thq-body-large">
                          {props.page3}
                        </span>
                        <span className="thq-body-small">
                          {props.page3Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar81-menu-item3">
                      <img
                        alt={props.page4ImageAlt}
                        src={props.page4ImageSrc}
                        className="navbar81-page4-image"
                      />
                      <div className="navbar81-content3">
                        <span className="navbar81-page4 thq-body-large">
                          {props.page4}
                        </span>
                        <span className="thq-body-small">
                          {props.page4Description}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar81-buttons1">
              <button className="navbar81-action11 thq-button-filled">
                {props.action1}
              </button>
            </div>
          </div>
          <div className="navbar81-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar81-container6 thq-box-shadow">
            <div className="navbar81-link5-menu-list">
              <div className="navbar81-menu-item4">
                <img
                  alt={props.page1ImageAlt}
                  src={props.page1ImageSrc}
                  className="navbar81-page1-image1 thq-img-ratio-1-1"
                />
                <div className="navbar81-content4">
                  <span className="navbar81-page11 thq-body-large">
                    {props.page1}
                  </span>
                  <span className="thq-body-small">
                    {props.page1Description}
                  </span>
                </div>
              </div>
              <div className="navbar81-menu-item5">
                <img
                  alt={props.page2ImageAlt}
                  src={props.page2ImageSrc}
                  className="navbar81-page2-image1 thq-img-ratio-1-1"
                />
                <div className="navbar81-content5">
                  <span className="navbar81-page21 thq-body-large">
                    {props.page2}
                  </span>
                  <span className="thq-body-small">
                    {props.page2Description}
                  </span>
                </div>
              </div>
              <div className="navbar81-menu-item6">
                <img
                  alt={props.page3ImageAlt}
                  src={props.page3ImageSrc}
                  className="navbar81-page3-image1 thq-img-ratio-1-1"
                />
                <div className="navbar81-content6">
                  <span className="navbar81-page31 thq-body-large">
                    {props.page3}
                  </span>
                  <span className="thq-body-small">
                    {props.page3Description}
                  </span>
                </div>
              </div>
              <div className="navbar81-menu-item7">
                <img
                  alt={props.page4ImageAlt}
                  src={props.page4ImageSrc}
                  className="navbar81-page4-image1 thq-img-ratio-1-1"
                />
                <div className="navbar81-content7">
                  <span className="navbar81-page41 thq-body-large">
                    {props.page4}
                  </span>
                  <span className="thq-body-small">
                    {props.page4Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar81-container7"
        ></div>
      )}
    </header>
  )
}

Navbar81.defaultProps = {
  page3: 'Pricing',
  page2Description:
    'Explore our wide range of expert-led courses on real estate, business mastery, and digital assets.',
  page2ImageAlt: 'Image representing Courses page',
  action2: 'Enroll Now',
  link4: 'Contact Us',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzMjY1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  page4Description:
    'Discover what our learners have to say about their experience with Amit World Academy.',
  link1: 'Home',
  page1Description:
    'Welcome to Amit World Academy, your gateway to learning and growth.',
  action1: 'Get Started',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzMjY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  page2: 'Courses',
  link3: 'About Us',
  page3ImageAlt: 'Image representing Pricing page',
  page4ImageAlt: 'Image representing Testimonials page',
  link2: 'Our Courses',
  page4: 'Testimonials',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1600508773950-d522f5bb7606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzMjY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  logoAlt: 'Amit World Academy Logo',
  logoSrc: '/logo%204-1500h.png',
  rootClassName: '',
  page1: 'Home',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDMzMjY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  page3Description:
    'Choose the pricing plan that suits your learning needs and budget.',
  page1ImageAlt: 'Image representing Home page',
}

Navbar81.propTypes = {
  page3: PropTypes.string,
  page2Description: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  action2: PropTypes.string,
  link4: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page4Description: PropTypes.string,
  link1: PropTypes.string,
  page1Description: PropTypes.string,
  action1: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2: PropTypes.string,
  link3: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  link2: PropTypes.string,
  page4: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  page1: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page3Description: PropTypes.string,
  page1ImageAlt: PropTypes.string,
}

export default Navbar81
