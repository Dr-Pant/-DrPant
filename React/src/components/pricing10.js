import React from 'react'

import PropTypes from 'prop-types'

import './pricing10.css'

const Pricing10 = (props) => {
  return (
    <div className="pricing10-pricing23 thq-section-padding">
      <div className="pricing10-max-width thq-section-max-width">
        <div className="pricing10-section-title">
          <div className="pricing10-content">
            <h2 className="pricing10-text thq-heading-2">{props.heading1}</h2>
            <p className="pricing10-text01 thq-body-large">{props.subtitle1}</p>
          </div>
        </div>
        <div className="pricing10-content1">
          <div className="pricing10-container"></div>
          <div className="pricing10-column1">
            <div className="pricing10-price">
              <div className="pricing10-price1">
                <p className="pricing10-text02 thq-body-large">{props.plan1}</p>
                <h3 className="pricing10-text03 thq-heading-3">
                  {props.plan1Price}
                </h3>
                <p className="pricing10-text04 thq-body-large">
                  {props.plan1Yearly}
                </p>
              </div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOHlBkDhhKBX9-5h-1TvvX9WPvp9JgHGhq6kvi9l0i-lq3aw/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer noopener"
              className="pricing10-button thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">{props.plan1Action}</span>
            </a>
          </div>
          <div className="pricing10-column2">
            <div className="pricing10-price2">
              <div className="pricing10-price3">
                <p className="pricing10-text06 thq-body-large">{props.plan2}</p>
                <h3 className="pricing10-text07 thq-heading-3">
                  {props.plan2Price}
                </h3>
                <p className="pricing10-text08 thq-body-large">
                  {props.plan2Yearly}
                </p>
              </div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOHlBkDhhKBX9-5h-1TvvX9WPvp9JgHGhq6kvi9l0i-lq3aw/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer noopener"
              className="pricing10-button1 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">{props.plan2Action}</span>
            </a>
          </div>
          <div className="pricing10-column3">
            <div className="pricing10-price4">
              <div className="pricing10-price5">
                <p className="pricing10-text10 thq-body-large">{props.plan3}</p>
                <h3 className="pricing10-text11 thq-heading-3">
                  {props.plan3Price}
                </h3>
                <p className="pricing10-text12 thq-body-large">
                  {props.plan3Yearly}
                </p>
              </div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOHlBkDhhKBX9-5h-1TvvX9WPvp9JgHGhq6kvi9l0i-lq3aw/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer noopener"
              className="pricing10-button2 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">{props.plan1Action11}</span>
            </a>
          </div>
        </div>
        <div className="pricing10-container01">
          <div className="pricing10-content2">
            <h3 className="thq-heading-3">{props.featureCategory1}</h3>
          </div>
          <div className="pricing10-container02">
            <div className="pricing10-container03">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
            <div className="pricing10-container04">
              <span className="pricing10-text16 thq-body-small">
                {props.count1}
              </span>
            </div>
            <div className="pricing10-container05">
              <span className="thq-body-small">{props.count2}</span>
            </div>
            <div className="pricing10-container06">
              <span className="pricing10-text18 thq-body-small">
                {props.count3}
              </span>
            </div>
          </div>
          <div className="pricing10-container07">
            <div className="pricing10-container08">
              <span className="thq-body-small">{props.feature2}</span>
            </div>
            <div className="pricing10-container09">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container10">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container11">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container12">
            <div className="pricing10-container13">
              <span className="thq-body-small">{props.feature3}</span>
            </div>
            <div className="pricing10-container14">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container15">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container16">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container17">
            <div className="pricing10-container18">
              <span className="thq-body-small">{props.feature4}</span>
            </div>
            <div className="pricing10-container19">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container20">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container21">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container22">
            <div className="pricing10-container23">
              <span className="thq-body-small">{props.feature5}</span>
            </div>
            <div className="pricing10-container24">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container25">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container26">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pricing10-container27">
          <div className="pricing10-content21">
            <h3 className="thq-heading-3">{props.featureCategory2}</h3>
          </div>
          <div className="pricing10-container28">
            <div className="pricing10-container29">
              <span className="thq-body-small">{props.feature6}</span>
            </div>
            <div className="pricing10-container30">
              <span className="pricing10-text25 thq-body-small">
                {props.count4}
              </span>
            </div>
            <div className="pricing10-container31">
              <span className="thq-body-small">{props.count5}</span>
            </div>
            <div className="pricing10-container32">
              <span className="pricing10-text27 thq-body-small">
                {props.count6}
              </span>
            </div>
          </div>
          <div className="pricing10-container33">
            <div className="pricing10-container34">
              <span className="thq-body-small">{props.feature7}</span>
            </div>
            <div className="pricing10-container35">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container36">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container37">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container38">
            <div className="pricing10-container39">
              <span className="thq-body-small">{props.feature8}</span>
            </div>
            <div className="pricing10-container40">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container41">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container42">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container43">
            <div className="pricing10-container44">
              <span className="thq-body-small">{props.feature9}</span>
            </div>
            <div className="pricing10-container45">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container46">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container47">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container48">
            <div className="pricing10-container49">
              <span className="thq-body-small">{props.feature10}</span>
            </div>
            <div className="pricing10-container50">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container51">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container52">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing10.defaultProps = {
  count4: 'Priority email support',
  featureCategory2: 'Premium Features',
  plan3Yearly: '$899',
  feature6: 'Interactive quizzes and assignments',
  feature3: 'Certificate of completion',
  count5: '+ Exclusive networking opportunities',
  feature8: 'Personalized feedback on assignments',
  plan3: 'Ultimate Plan',
  plan1Action: 'Enroll Now',
  plan2Action: 'Enroll Now',
  count2: '24/7 online support',
  plan1: 'Basic Plan',
  plan1Action11: 'Enroll Now',
  feature4: 'Access to all real estate and business mastery courses',
  plan2Price: '$49',
  count3: '30+ courses available',
  feature2: 'Learn at your own pace',
  heading1: 'Choose Your Pricing Plan',
  feature9: '+ Access to digital assets courses',
  plan1Price: '$29',
  plan3Price: '$89',
  plan2Yearly: '$499',
  count1: '10+ courses available',
  feature7: 'Exclusive webinars and workshops',
  feature10: '+ One-on-one coaching sessions',
  plan2: 'Premium Plan',
  plan1Yearly: '$299',
  subtitle1: 'Select the plan that best fits your learning goals',
  featureCategory1: 'Basic Features',
  feature1: 'Access to selected real estate courses',
  count6: '+ Personalized career guidance',
  feature5: 'Priority customer support',
}

Pricing10.propTypes = {
  count4: PropTypes.string,
  featureCategory2: PropTypes.string,
  plan3Yearly: PropTypes.string,
  feature6: PropTypes.string,
  feature3: PropTypes.string,
  count5: PropTypes.string,
  feature8: PropTypes.string,
  plan3: PropTypes.string,
  plan1Action: PropTypes.string,
  plan2Action: PropTypes.string,
  count2: PropTypes.string,
  plan1: PropTypes.string,
  plan1Action11: PropTypes.string,
  feature4: PropTypes.string,
  plan2Price: PropTypes.string,
  count3: PropTypes.string,
  feature2: PropTypes.string,
  heading1: PropTypes.string,
  feature9: PropTypes.string,
  plan1Price: PropTypes.string,
  plan3Price: PropTypes.string,
  plan2Yearly: PropTypes.string,
  count1: PropTypes.string,
  feature7: PropTypes.string,
  feature10: PropTypes.string,
  plan2: PropTypes.string,
  plan1Yearly: PropTypes.string,
  subtitle1: PropTypes.string,
  featureCategory1: PropTypes.string,
  feature1: PropTypes.string,
  count6: PropTypes.string,
  feature5: PropTypes.string,
}

export default Pricing10
