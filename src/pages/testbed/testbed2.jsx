import React from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  myH1: {
    color: "red",
  },
  'h2': {
    color: "white",
  },
})

const testbed2 = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <h1 className={classes.myH1}>this is h1</h1>
      <h2>this is h2</h2>
      <button>this is button</button>
    </React.Fragment>
  )
}

testbed2.propTypes = {}

export default testbed2
