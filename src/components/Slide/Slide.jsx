import React from "react"
import PropTypes from "prop-types"

import styles from "./Slide.module.scss"

const Slide = props => {
  return (
    <div id={props.id} className={styles.container} style={{ backgroundColor: props.bg }}>
      {props.children}
    </div>
  )
}

Slide.defaultProps = {
  bg: "#fff",
}

Slide.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
}

export default Slide
