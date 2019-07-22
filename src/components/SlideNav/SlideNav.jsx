import React from "react"
import PropTypes from "prop-types"

import ScrollSpy from "react-scrollspy"

import SlideNavElement from "./SlideNavElement/SlideNavElement"
import styles from "./SlideNav.module.scss"

const SlideNav = props => {
  console.log(props.slides)
  const slideEles = props.slides.map(s => {
    return <SlideNavElement key={s} title={s} />
  })
  // const slideEles = (
  //     <li>
  //       <a href="#foo">foo</a>
  //     </li>
  //     <li>
  //       <a href="#bar">bar</a>
  //     </li>
  //     <li>
  //       <a href="#baz">buz</a>
  //     </li>
  //     <li>
  //       <a href="#qux">quf</a>
  //     </li>
  // )
  return (
    <ScrollSpy
      items={props.slides}
      currentClassName={styles.activeNav}
      className={styles.navContainer}
    >
      {slideEles}
    </ScrollSpy>
  )
}

SlideNav.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SlideNav
