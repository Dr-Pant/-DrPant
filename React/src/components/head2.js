import React from 'react'

import PropTypes from 'prop-types'

import './head2.css'

const Head2 = (props) => {
  return (
    <figure className={`head2-container ${props.rootClassName} `}>
      <div className="head2-max-width thq-flex-row thq-section-max-width">
        <div className="head2-container1">
          <h1 className="head2-text thq-heading-1">{props.heading}</h1>
        </div>
      </div>
    </figure>
  )
}

Head2.defaultProps = {
  heading: 'About us',
  rootClassName: '',
}

Head2.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Head2
