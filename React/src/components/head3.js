import React from 'react'

import PropTypes from 'prop-types'

import './head3.css'

const Head3 = (props) => {
  return (
    <figure className={`head3-container ${props.rootClassName} `}>
      <div className="head3-max-width thq-flex-row thq-section-max-width">
        <div className="head3-container1">
          <h1 className="head3-text thq-heading-1">{props.heading}</h1>
        </div>
      </div>
    </figure>
  )
}

Head3.defaultProps = {
  rootClassName: '',
  heading: 'Get in Touch',
}

Head3.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Head3
