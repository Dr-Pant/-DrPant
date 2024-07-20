import React from 'react'

import PropTypes from 'prop-types'

import './head1.css'

const Head1 = (props) => {
  return (
    <figure className={`head1-container ${props.rootClassName} `}>
      <div className="head1-max-width thq-flex-row thq-section-max-width">
        <div className="head1-container1">
          <h1 className="head1-text thq-heading-1">{props.heading}</h1>
        </div>
      </div>
    </figure>
  )
}

Head1.defaultProps = {
  heading: 'Our Courses',
  rootClassName: '',
}

Head1.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Head1
