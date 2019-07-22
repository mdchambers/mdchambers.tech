import React from "react"
import PropTypes from "prop-types"

import styles from './TestDiv.module.scss';

const TestDiv = props => {
  console.log(props);
  return (
    <section className={styles.navDiv} id={props.title} style={{ backgroundColor: props.color }}>
      {props.children}
    </section>
  )
}

TestDiv.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default TestDiv
