import React from "react"
import PropTypes from "prop-types"

import styles from './SlideNavElement.module.scss'

const SlideNavElement = props => {
  return (
    <li>
      <a className={styles.navElement} href={`#${props.title}`}>{props.title}</a>
    </li>
  )
}

SlideNavElement.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SlideNavElement
