import React from "react"
import classNames from "classnames"

import styles from "./slides.module.scss"

const IntroSlide = props => {
  // console.log(classes);
  // console.log('rendering')
  return (
    <div className={styles.wrapper}>
      <div className="columns">
        <div className="column is-one-third">
          <img
            className={styles.profilePic}
            src="img/placeholder_square.png"
            alt="Profile pic"
          />
        </div>
        <div className="column auto">
          <h1 className={styles.introTitle}>Michael D</h1>
          <h1 className={styles.introTitle}>Chambers</h1>
        </div>
      </div>
    </div>
  )
}

export default IntroSlide
