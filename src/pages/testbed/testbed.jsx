import React from "react"


import TestDiv from "../../test_components/TestDiv"
// import TestNav from "../../test_components/TestNav"
import NavBeads from "../../components/NavBeads/NavBeads"

import styles from "./testbed.module.scss"

import "./testbed.scss"

const testbed = props => {
  const slideNames = ["foo", "bar", "baz", "qux"]
  const slideColors = ["#351f39", "#726a95", "#709fb0", "#a0c1b8"]
  const slideContent = ["foo", "bar", "baz", "qux"]

  const divs = slideNames.map((name, idx) => {
    return (
      <TestDiv key={name} color={slideColors[idx]} title={name}>
        {slideContent[idx]}
      </TestDiv>
    )
  })

  return (
    <React.Fragment>
      {divs}
      <NavBeads ids={slideNames} />
    </React.Fragment>
  )
}

testbed.propTypes = {}

export default testbed
