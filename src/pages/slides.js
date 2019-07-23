import React from "react"


// import styles from "./slides.module.scss"

import Slide from "../components/Slide/Slide"
import SlideNav from "../components/SlideNav/SlideNav"

const slides = () => {
  const slideNames = ["foo", "bar", "baz", "qux"]
  const slideColors = ["#351f39", "#726a95", "#709fb0", "#a0c1b8"]
  const slideContent = ["foo", "bar", "baz", "qux"]
  const slides = slideNames.map((n, idx) => {
    return (
      <Slide key={n} id={n} bg={slideColors[idx]}>
        {slideContent[idx]}
      </Slide>
    )
  })
  return (
    <React.Fragment>
      <nav>
        <SlideNav slides={slideNames} />
      </nav>
      <main>{slides}</main>
    </React.Fragment>
  )
}

export default slides
