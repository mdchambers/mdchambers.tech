import React from "react"

import styles from "./test.module.scss"

const test = () => {
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

export default test
