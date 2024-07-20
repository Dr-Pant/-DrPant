import React from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text">{props.content1}</span>
          <div className="team1-content">
            <h2 className="thq-heading-2 team1-text01">{props.heading1}</h2>
            <p className="thq-body-large team1-text02">{props.content2}</p>
          </div>
        </div>
        <div className="team1-content01">
          <div className="team1-content02">
            <div className="team1-row">
              <div className="team1-container">
                <div className="team1-card">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content03">
                    <div className="team1-title">
                      <span className="team1-text03 thq-body-small">
                        {props.member1}
                      </span>
                      <span className="team1-text04 thq-body-small">
                        {props.member1Job}
                      </span>
                    </div>
                  </div>
                  <div className="team1-social-icons"></div>
                </div>
                <div className="team1-card1">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content04">
                    <div className="team1-title1">
                      <span className="team1-text05 thq-body-small">
                        {props.member2}
                      </span>
                      <span className="team1-text06 thq-body-small">
                        {props.member2Job}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team1-container1">
                <div className="team1-card2">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content05">
                    <div className="team1-title2">
                      <span className="team1-text07 thq-body-small">
                        {props.member3}
                      </span>
                      <span className="team1-text08 thq-body-small">
                        {props.member3Job}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team1-card3">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content06">
                    <div className="team1-title3">
                      <span className="team1-text09 thq-body-small">
                        {props.member4}
                      </span>
                      <span className="team1-text10 thq-body-small">
                        {props.member4Job}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-row1">
              <div className="team1-container2">
                <div className="team1-card4">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content07">
                    <div className="team1-title4">
                      <span className="team1-text11 thq-body-small">
                        {props.member5}
                      </span>
                      <span className="team1-text12 thq-body-small">
                        {props.member5Job}
                      </span>
                    </div>
                  </div>
                  <div className="team1-social-icons1"></div>
                </div>
                <div className="team1-card5">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content08">
                    <div className="team1-title5">
                      <span className="team1-text13 thq-body-small">
                        {props.member6}
                      </span>
                      <span className="team1-text14 thq-body-small">
                        {props.member6Job}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team1-container3">
                <div className="team1-card6">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image6 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content09">
                    <div className="team1-title6">
                      <span className="team1-text15 thq-body-small">
                        {props.member7}
                      </span>
                      <span className="team1-text16 thq-body-small">
                        {props.member7Job}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team1-card7">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image7 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-content10">
                    <div className="team1-title7">
                      <span className="team1-text17 thq-body-small">
                        {props.member8}
                      </span>
                      <span className="team1-text18 thq-body-small">
                        {props.member8Job}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  content1: 'Join Our Team Today!',
  member5Src:
    'https://images.unsplash.com/photo-1621362486954-1d18088be1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Job: 'Head of Digital Assets',
  member1Src: '/whatsapp%20image%202024-06-09%20at%206.19.28%20pm-500w.jpeg',
  actionContent: 'Open positions',
  member4Alt: 'Image of Emily Brown',
  member8Src:
    'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member4: 'Emily Brown',
  member7Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member3Alt: 'Image of Alex Johnson',
  member6Job: 'Job title',
  member6Alt: 'Member Alt',
  heading2: 'We’re hiring!',
  member8Alt: 'Member Alt',
  member1Alt: 'Image of John Doe',
  member2: 'Jane Smith',
  member7Alt: 'Member Alt',
  heading1: 'Meet Our Team',
  member3Job: 'Real Estate Specialist',
  member2Content:
    'Jane is a digital marketing expert who has helped numerous businesses grow their online presence.',
  member3: 'Alex Johnson',
  member7: 'Full name',
  member7Job: 'Job title',
  member3Src:
    'https://images.unsplash.com/photo-1636041293178-808a6762ab39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member4Content:
    'Emily is a business strategist who has coached many individuals to achieve their entrepreneurial goals.',
  member1: 'Amit Kumar Jha',
  member5: 'Full name',
  member6: 'Full name',
  member8Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member1Job: 'Founder & Director',
  member4Job: 'Business Mastery Coach',
  member1Content:
    'John is a seasoned entrepreneur with over 15 years of experience in real estate and business development.',
  member5Job: 'Job title',
  member2Alt: 'Image of Jane Smith',
  member3Content:
    'Alex has a background in real estate investment and has successfully managed property portfolios for clients.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member8Job: 'Job title',
  member7Src:
    'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Alt: 'Member Alt',
  member8: 'Full name',
  member2Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI0MzQxMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Team1.propTypes = {
  content1: PropTypes.string,
  member5Src: PropTypes.string,
  member4Src: PropTypes.string,
  member6Content: PropTypes.string,
  member2Job: PropTypes.string,
  member1Src: PropTypes.string,
  actionContent: PropTypes.string,
  member4Alt: PropTypes.string,
  member8Src: PropTypes.string,
  content3: PropTypes.string,
  member4: PropTypes.string,
  member7Content: PropTypes.string,
  member3Alt: PropTypes.string,
  member6Job: PropTypes.string,
  member6Alt: PropTypes.string,
  heading2: PropTypes.string,
  member8Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  member2: PropTypes.string,
  member7Alt: PropTypes.string,
  heading1: PropTypes.string,
  member3Job: PropTypes.string,
  member2Content: PropTypes.string,
  member3: PropTypes.string,
  member7: PropTypes.string,
  member7Job: PropTypes.string,
  member3Src: PropTypes.string,
  member6Src: PropTypes.string,
  member5Content: PropTypes.string,
  member4Content: PropTypes.string,
  member1: PropTypes.string,
  member5: PropTypes.string,
  member6: PropTypes.string,
  member8Content: PropTypes.string,
  member1Job: PropTypes.string,
  member4Job: PropTypes.string,
  member1Content: PropTypes.string,
  member5Job: PropTypes.string,
  member2Alt: PropTypes.string,
  member3Content: PropTypes.string,
  content2: PropTypes.string,
  member8Job: PropTypes.string,
  member7Src: PropTypes.string,
  member5Alt: PropTypes.string,
  member8: PropTypes.string,
  member2Src: PropTypes.string,
}

export default Team1
