import React from "react"

import "./slides.scss"
import styles from "./slides.module.scss"

const slides = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <a href="#foo">foo</a>
        </li>
        <li>
          <a href="#bar">bar</a>
        </li>
        <li>
          <a href="#baz">baz</a>
        </li>
        <li>
          <a href="#qux">qux</a>
        </li>
      </ul>
      <div className={styles.container}>
        <div id="foo">foo</div>
        <div id="bar">bar</div>
        <div id="baz">baz</div>
        <div id="qux">qux</div>
      </div>
    </React.Fragment>
  )
}

export default slides
