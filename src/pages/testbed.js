import React from "react"
import PropTypes from "prop-types"
import ScrollSpy from "react-scrollspy"

import TestDiv from "../test_components/TestDiv"

import styles from "./testbed.module.scss"

import "./testbed.scss"

const testbed = props => {
  const slideNames = ["foo", "bar", "baz", "qux"]
  const slideColors = ["#351f39", "#726a95", "#709fb0", "#a0c1b8"]
  const slideContent = ["foo", "bar", "baz", "qux"]

  const divs = slideNames.map((name, idx) => {
    return (
      <TestDiv color={slideColors[idx]} key={name} title={name}>
        {slideContent[idx]}
      </TestDiv>
    )
  })
  return (
    <React.Fragment>
      <div>
        {divs}
        {/* <section
          className={styles.navDiv}
          style={{ backgroundColor: "#351f39" }}
          id="foo"
        >
          foo
        </section>
        <section
          className={styles.navDiv}
          style={{ backgroundColor: "#726a95" }}
          id="bar"
        >
          bar
        </section>
        <section
          className={styles.navDiv}
          style={{ backgroundColor: "#709fb0" }}
          id="buz"
        >
          buz
        </section>
        <section
          className={styles.navDiv}
          style={{ backgroundColor: "#a0c1b8" }}
          id="quf"
        >
          quf
        </section> */}
      </div>
      <ScrollSpy
        className={styles.navBar}
        items={slideNames}
        currentClassName={styles.isCurrent}
      >
        <li>
          <a href="#foo">foo</a>
        </li>
        <li>
          <a href="#bar">bar</a>
        </li>
        <li>
          <a href="#baz">buz</a>
        </li>
        <li>
          <a href="#qux">quf</a>
        </li>
      </ScrollSpy>

      {/* <div>
        <div>
          <section id="section-1">section 1</section>
          <section id="section-2">section 2</section>
          <section id="section-3">section 3</section>
        </div>
        <ScrollSpy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
          className="scrollNav"
        >
          <li>
            <a href="#section-1">section 1</a>
          </li>
          <li>
            <a href="#section-2">section 2</a>
          </li>
          <li>
            <a href="#section-3">section 3</a>
          </li>
        </ScrollSpy>
      </div> */}
    </React.Fragment>
  )
}

testbed.propTypes = {}

export default testbed
