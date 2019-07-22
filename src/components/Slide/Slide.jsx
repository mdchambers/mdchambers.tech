import React from "react"
import PropTypes from "prop-types"

import styles from "./Slide.module.scss"

const Slide = props => {
  return (
    <section id={props.id} className={styles.container} style={{ backgroundColor: props.bg }}>
      {props.children}
    </section>
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
