import React from "react"

import ScrollSpy from "react-scrollspy"

import styles from "./TestNav.module.scss"

const TestNav = props => {
  const navs = props.names.map(name => {
    return (
      <li className={styles.navElement} key={name}>
        <a href={`#${name}`}>{name}</a>
      </li>
    )
  })
  return (
    <ScrollSpy
      className={styles.navMenu}
      items={props.names}
      currentClassName={styles.currentNav}
    >
      {navs}
    </ScrollSpy>
  )
}

export default TestNav
